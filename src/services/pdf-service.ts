import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export interface RentalAgreementData {
  eventId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  eventType: string;
  guestCount: number;
  signature: string;
  signatureDate: string;
}

class PDFService {
  /**
   * Generate a rental agreement PDF
   */
  async generateRentalAgreement(data: RentalAgreementData): Promise<Uint8Array> {
    try {
      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([612, 792]); // Letter size

      // Get fonts
      const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
      const timesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

      const { width, height } = page.getSize();
      const margin = 50;
      let yPosition = height - margin;

      // Helper function to add text
      const addText = (text: string, size: number, font: any, bold: boolean = false) => {
        page.drawText(text, {
          x: margin,
          y: yPosition,
          size,
          font: bold ? timesRomanBold : font,
          color: rgb(0, 0, 0),
        });
        yPosition -= size + 8;
      };

      // Title
      addText('THOMAS JEFFERSON CIVIC CENTER', 18, timesRomanBold, true);
      addText('FACILITY RENTAL AGREEMENT', 16, timesRomanBold, true);
      yPosition -= 10;

      // Contract details
      addText(`Event ID: ${data.eventId}`, 10, timesRomanFont);
      addText(`Date Generated: ${new Date().toLocaleDateString()}`, 10, timesRomanFont);
      yPosition -= 10;

      // Renter Information
      addText('RENTER INFORMATION', 14, timesRomanBold, true);
      addText(`Name: ${data.customerName}`, 11, timesRomanFont);
      addText(`Email: ${data.customerEmail}`, 11, timesRomanFont);
      addText(`Phone: ${data.customerPhone}`, 11, timesRomanFont);
      yPosition -= 10;

      // Event Details
      addText('EVENT DETAILS', 14, timesRomanBold, true);
      addText(`Event Type: ${data.eventType}`, 11, timesRomanFont);
      addText(`Date: ${data.eventDate}`, 11, timesRomanFont);
      addText(`Time: ${data.startTime} - ${data.endTime}`, 11, timesRomanFont);
      addText(`Expected Guests: ${data.guestCount}`, 11, timesRomanFont);
      yPosition -= 10;

      // Terms and Conditions
      addText('TERMS AND CONDITIONS', 14, timesRomanBold, true);

      const terms = [
        '1. FACILITY USE: This agreement grants use of the Thomas Jefferson Civic Center',
        '   for the specified date and time only.',
        '',
        '2. PAYMENT: Full payment and security deposit are due at time of booking.',
        '',
        '3. CAPACITY: Maximum occupancy is 150 persons.',
        '',
        '4. RENTER RESPONSIBILITIES: The Renter agrees to:',
        '   - Leave facility in same condition as found',
        '   - Comply with all fire and safety regulations',
        '   - Supervise all guests and activities',
        '',
        '5. PROHIBITED: Smoking indoors, illegal activities, property damage.',
        '',
        '6. LIABILITY: Renter assumes full responsibility for any damages.',
      ];

      terms.forEach(term => {
        addText(term, 10, timesRomanFont);
      });

      yPosition -= 20;

      // Signature section
      addText('SIGNATURE', 14, timesRomanBold, true);
      addText('By signing below, the Renter agrees to all terms and conditions.', 10, timesRomanFont);
      yPosition -= 10;

      addText(`Signature: ${data.signature}`, 12, timesRomanFont);
      addText(`Date: ${data.signatureDate}`, 11, timesRomanFont);

      // Footer
      yPosition = 50;
      page.drawText(
        'Thomas Jefferson Civic Center | 8237 Nevada St, Jacksonville, FL 32220 | (904) 424-1873',
        {
          x: margin,
          y: yPosition,
          size: 8,
          font: timesRomanFont,
          color: rgb(0.5, 0.5, 0.5),
        }
      );

      // Serialize the PDF to bytes
      const pdfBytes = await pdfDoc.save();
      return pdfBytes;
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw new Error('Failed to generate rental agreement PDF');
    }
  }

  /**
   * Download PDF file
   */
  downloadPDF(pdfBytes: Uint8Array, filename: string): void {
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  /**
   * Send PDF via email (requires backend API)
   */
  async sendPDFByEmail(pdfBytes: Uint8Array, email: string): Promise<void> {
    const apiUrl = import.meta.env.VITE_API_BASE_URL || '';

    // Convert PDF bytes to base64
    const base64PDF = btoa(String.fromCharCode(...pdfBytes));

    try {
      const response = await fetch(`${apiUrl}/send-agreement`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          pdfData: base64PDF,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending PDF by email:', error);
      throw error;
    }
  }
}

export default new PDFService();
