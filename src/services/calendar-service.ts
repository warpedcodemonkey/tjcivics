import { PutCommand, GetCommand, QueryCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { docClient, TABLES } from './aws-config';

export interface CalendarEvent {
  eventId: string;
  date: string; // ISO date string
  startTime: string;
  endTime: string;
  eventType: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  guestCount: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface BookingRequest {
  date: string;
  startTime: string;
  endTime: string;
  eventType: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  guestCount: number;
  isMember: boolean;
  additionalServices: string[];
  specialRequests?: string;
}

class CalendarService {
  private tableName = TABLES.CALENDAR_EVENTS;

  /**
   * Create a new event booking
   */
  async createBooking(booking: BookingRequest): Promise<CalendarEvent> {
    const eventId = `event-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const now = new Date().toISOString();

    const event: CalendarEvent = {
      eventId,
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime,
      eventType: booking.eventType,
      customerName: booking.customerName,
      customerEmail: booking.customerEmail,
      customerPhone: booking.customerPhone,
      guestCount: booking.guestCount,
      status: 'pending',
      createdAt: now,
      updatedAt: now,
    };

    try {
      await docClient.send(
        new PutCommand({
          TableName: this.tableName,
          Item: event,
        })
      );
      return event;
    } catch (error) {
      console.error('Error creating booking:', error);
      throw new Error('Failed to create booking');
    }
  }

  /**
   * Get an event by ID
   */
  async getEventById(eventId: string): Promise<CalendarEvent | null> {
    try {
      const result = await docClient.send(
        new GetCommand({
          TableName: this.tableName,
          Key: { eventId },
        })
      );
      return (result.Item as CalendarEvent) || null;
    } catch (error) {
      console.error('Error getting event:', error);
      throw new Error('Failed to get event');
    }
  }

  /**
   * Get all events for a specific date
   */
  async getEventsByDate(date: string): Promise<CalendarEvent[]> {
    try {
      const result = await docClient.send(
        new QueryCommand({
          TableName: this.tableName,
          IndexName: 'DateIndex', // Requires GSI on date field
          KeyConditionExpression: '#date = :date',
          ExpressionAttributeNames: {
            '#date': 'date',
          },
          ExpressionAttributeValues: {
            ':date': date,
          },
        })
      );
      return (result.Items as CalendarEvent[]) || [];
    } catch (error) {
      console.error('Error getting events by date:', error);
      // Fallback to scan if GSI doesn't exist
      return this.scanEventsByDate(date);
    }
  }

  /**
   * Fallback method to scan for events by date
   */
  private async scanEventsByDate(date: string): Promise<CalendarEvent[]> {
    try {
      const result = await docClient.send(
        new ScanCommand({
          TableName: this.tableName,
          FilterExpression: '#date = :date',
          ExpressionAttributeNames: {
            '#date': 'date',
          },
          ExpressionAttributeValues: {
            ':date': date,
          },
        })
      );
      return (result.Items as CalendarEvent[]) || [];
    } catch (error) {
      console.error('Error scanning events:', error);
      return [];
    }
  }

  /**
   * Get all upcoming events
   */
  async getUpcomingEvents(limit: number = 10): Promise<CalendarEvent[]> {
    try {
      const today = new Date().toISOString().split('T')[0];
      const result = await docClient.send(
        new ScanCommand({
          TableName: this.tableName,
          FilterExpression: '#date >= :today AND #status = :status',
          ExpressionAttributeNames: {
            '#date': 'date',
            '#status': 'status',
          },
          ExpressionAttributeValues: {
            ':today': today,
            ':status': 'confirmed',
          },
          Limit: limit,
        })
      );
      const events = (result.Items as CalendarEvent[]) || [];
      return events.sort((a, b) => a.date.localeCompare(b.date));
    } catch (error) {
      console.error('Error getting upcoming events:', error);
      return [];
    }
  }

  /**
   * Update event status
   */
  async updateEventStatus(
    eventId: string,
    status: 'pending' | 'confirmed' | 'cancelled'
  ): Promise<void> {
    try {
      await docClient.send(
        new PutCommand({
          TableName: this.tableName,
          Item: {
            eventId,
            status,
            updatedAt: new Date().toISOString(),
          },
        })
      );
    } catch (error) {
      console.error('Error updating event status:', error);
      throw new Error('Failed to update event status');
    }
  }

  /**
   * Check if a date/time slot is available
   */
  async isTimeSlotAvailable(
    date: string,
    startTime: string,
    endTime: string
  ): Promise<boolean> {
    const events = await this.getEventsByDate(date);

    // Check for any overlapping confirmed events
    const hasConflict = events.some((event) => {
      if (event.status === 'cancelled') return false;

      // Check for time overlap
      const existingStart = event.startTime;
      const existingEnd = event.endTime;

      return (
        (startTime >= existingStart && startTime < existingEnd) ||
        (endTime > existingStart && endTime <= existingEnd) ||
        (startTime <= existingStart && endTime >= existingEnd)
      );
    });

    return !hasConflict;
  }
}

export default new CalendarService();
