/**
 * Square Payment Service
 *
 * This service handles payment processing using the Square Web Payments SDK.
 * Documentation: https://developer.squareup.com/docs/web-payments/overview
 */

// Square configuration from environment variables
const SQUARE_APP_ID = import.meta.env.VITE_SQUARE_APPLICATION_ID || '';
const SQUARE_LOCATION_ID = import.meta.env.VITE_SQUARE_LOCATION_ID || '';

export interface PaymentAmount {
  amount: number; // Amount in cents (e.g., 40000 for $400.00)
  currency: string; // e.g., 'USD'
}

export interface PaymentDetails {
  eventId: string;
  customerName: string;
  customerEmail: string;
  amount: PaymentAmount;
  description: string;
}

export interface PaymentResult {
  success: boolean;
  transactionId?: string;
  error?: string;
}

class SquarePaymentService {
  private payments: any = null;
  private card: any = null;

  /**
   * Initialize Square Web Payments SDK
   */
  async initialize(): Promise<void> {
    try {
      // Check if Square SDK is loaded
      if (!(window as any).Square) {
        throw new Error('Square Web Payments SDK not loaded');
      }

      this.payments = (window as any).Square.payments(
        SQUARE_APP_ID,
        SQUARE_LOCATION_ID
      );

      // Initialize card payment method
      this.card = await this.payments.card();
      await this.card.attach('#card-container');

      console.log('Square Payments initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Square Payments:', error);
      throw error;
    }
  }

  /**
   * Process a payment
   */
  async processPayment(details: PaymentDetails): Promise<PaymentResult> {
    try {
      if (!this.card) {
        throw new Error('Square Payments not initialized');
      }

      // Tokenize the card details
      const tokenResult = await this.card.tokenize();

      if (tokenResult.status === 'OK') {
        // Send token to backend for processing
        const result = await this.sendPaymentToBackend({
          token: tokenResult.token,
          ...details,
        });

        return {
          success: true,
          transactionId: result.transactionId,
        };
      } else {
        return {
          success: false,
          error: tokenResult.errors?.[0]?.message || 'Payment failed',
        };
      }
    } catch (error: any) {
      console.error('Payment processing error:', error);
      return {
        success: false,
        error: error.message || 'Payment processing failed',
      };
    }
  }

  /**
   * Send payment to backend API
   * This is a placeholder - you'll need to implement your backend API
   */
  private async sendPaymentToBackend(data: any): Promise<any> {
    const apiUrl = import.meta.env.VITE_API_BASE_URL || '';

    // Development mode: Simulate successful payment if no backend is configured
    if (!apiUrl || apiUrl === 'http://localhost:3000/api') {
      console.log('Development mode: Simulating payment processing');
      console.log('Payment data:', data);

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Return simulated successful response
      return {
        transactionId: 'DEV-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
        status: 'COMPLETED',
        amount: data.amount,
        timestamp: new Date().toISOString(),
      };
    }

    // Production mode: Call actual backend API
    // In production, this would call your backend API
    // which would use Square's Payments API to process the payment
    const response = await fetch(`${apiUrl}/process-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Payment processing failed');
    }

    return response.json();
  }

  /**
   * Calculate rental amount based on booking details
   */
  calculateRentalAmount(params: {
    isMember: boolean;
    duration: 'half-day' | 'full-day' | 'weekend';
    additionalServices: string[];
  }): PaymentAmount {
    let amount = 0;

    // Base rental rates (in cents)
    const rates = {
      'half-day': { member: 15000, nonMember: 20000 },
      'full-day': { member: 25000, nonMember: 35000 },
      'weekend': { member: 30000, nonMember: 40000 },
    };

    // Add base rental fee
    amount += params.isMember
      ? rates[params.duration].member
      : rates[params.duration].nonMember;

    // Security deposit
    amount += 15000; // $150

    // Additional services
    if (params.additionalServices.includes('setup')) {
      amount += 7500; // $75
    }
    if (params.additionalServices.includes('cleaning')) {
      amount += 5000; // $50
    }

    return {
      amount,
      currency: 'USD',
    };
  }

  /**
   * Format amount for display
   */
  formatAmount(amount: PaymentAmount): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: amount.currency,
    }).format(amount.amount / 100);
  }

  /**
   * Destroy payment form
   */
  async destroy(): Promise<void> {
    if (this.card) {
      await this.card.destroy();
      this.card = null;
    }
    this.payments = null;
  }
}

export default new SquarePaymentService();
