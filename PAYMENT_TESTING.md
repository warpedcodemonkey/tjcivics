# Payment Testing Guide

This guide explains how to test the Square payment integration in development mode.

## Quick Start

The payment system is now fully wired and ready for testing. Follow these steps:

### 1. Configure Square Credentials

Edit the `.env` file and add your Square Sandbox credentials:

```env
VITE_SQUARE_APPLICATION_ID=sandbox-sq0idb-YOUR_SANDBOX_APP_ID
VITE_SQUARE_LOCATION_ID=YOUR_SANDBOX_LOCATION_ID
```

**Get your credentials:**
1. Visit [Square Developer Dashboard](https://developer.squareup.com/apps)
2. Create a new application (or use existing)
3. Go to the "Credentials" tab
4. Copy the **Sandbox Application ID** and **Sandbox Location ID**

### 2. Start Development Server

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`

### 3. Access the Payment Page

Navigate to: **Rentals → Make Payment**

Direct URL: `http://localhost:5173/rentals/make-payment`

### 4. Test Payment Form

The Square payment form will load automatically when you select "Credit/Debit Card" as the payment method.

#### Test Card Numbers (Square Sandbox)

Use these test card numbers to simulate different payment scenarios:

**Successful Payment:**
- Card Number: `4111 1111 1111 1111`
- Expiration: Any future date (e.g., `12/25`)
- CVV: Any 3 digits (e.g., `111`)
- ZIP: Any 5 digits (e.g., `12345`)

**Other Test Cards:**
- Visa: `4532 0158 8561 6950`
- Mastercard: `5425 2334 3010 9903`
- Amex: `3782 822463 10005`

**Declined Payment (for testing errors):**
- Card Number: `4000 0000 0000 0002`

For more test cards, visit: [Square Testing Documentation](https://developer.squareup.com/docs/devtools/sandbox/payments)

### 5. Development Mode Features

#### Simulated Backend
Since no backend API is configured, the payment service automatically runs in **development mode**:
- Payment tokens are validated by Square
- Backend processing is simulated locally
- Transaction IDs are generated with `DEV-` prefix
- 1.5 second delay simulates API processing

#### What Gets Tested
- ✅ Square Web Payments SDK initialization
- ✅ Card form rendering and validation
- ✅ Payment tokenization
- ✅ Error handling
- ✅ Success/failure UI states
- ✅ Amount calculations (member vs non-member rates)
- ✅ Security deposit handling
- ✅ Additional services pricing

## Testing Different Scenarios

### Scenario 1: Basic Payment (Member)
1. Navigate to payment page with state:
   ```javascript
   {
     date: '2025-03-15',
     startTime: '10:00 AM',
     endTime: '6:00 PM',
     customerName: 'John Doe',
     customerEmail: 'john@example.com',
     isMember: true,
     duration: 'full-day',
     additionalServices: []
   }
   ```
2. Expected total: $400 ($250 member rate + $150 deposit)
3. Use test card `4111 1111 1111 1111`
4. Submit payment
5. Should show success message and redirect

### Scenario 2: Non-Member with Additional Services
1. Navigate with state:
   ```javascript
   {
     isMember: false,
     duration: 'full-day',
     additionalServices: ['setup', 'cleaning']
   }
   ```
2. Expected total: $525 ($350 non-member + $150 deposit + $75 setup + $50 cleaning)
3. Test payment flow

### Scenario 3: Error Handling
1. Use declined test card: `4000 0000 0000 0002`
2. Submit payment
3. Should display error message
4. Form should remain usable for retry

### Scenario 4: Direct Navigation (No Booking Data)
1. Navigate directly to `/rentals/make-payment`
2. Should display default values:
   - Date: "Not specified"
   - Time: "Not specified"
   - Amount: $400 (default full-day non-member + deposit)
3. Payment form should still work

## Integration with Booking Workflow

### Complete Workflow Path:
1. **Calendar Page** → Select date and time
2. **Plan Event Page** → Enter customer details
3. **Rental Agreement Page** → Sign PDF document
4. **Make Payment Page** → Complete payment ← *You are here*
5. **Confirmation** → Redirects to pricing page with success message

### Data Flow:
Each page passes booking data to the next using React Router's `location.state`:

```javascript
// From previous page
navigate('/rentals/make-payment', {
  state: {
    eventId: 'evt-123',
    date: '2025-03-15',
    startTime: '10:00 AM',
    endTime: '6:00 PM',
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    isMember: true,
    duration: 'full-day',
    additionalServices: ['setup']
  }
});
```

## Checking Payment Success

### Browser Console
Open browser DevTools (F12) and check the console for:
- "Square Payments initialized successfully"
- "Development mode: Simulating payment processing"
- Payment data object with token and amount

### Network Tab
You'll see the Square SDK loading from `sandbox.web.squarecdn.com`

### Success Indicators
- ✅ Green success message appears
- ✅ Button changes to "Payment Successful!"
- ✅ Redirects to pricing page after 2 seconds
- ✅ Console shows transaction ID (DEV-xxxxx)

## Common Issues & Solutions

### Issue: "Square Web Payments SDK not loaded"
**Solution:** Ensure the Square script is in `index.html`:
```html
<script type="text/javascript" src="https://sandbox.web.squarecdn.com/v1/square.js"></script>
```

### Issue: Payment form doesn't appear
**Solution:** Check browser console for errors. Verify:
1. Square credentials are in `.env`
2. `.env` variables start with `VITE_`
3. Server was restarted after editing `.env`

### Issue: "Failed to initialize Square Payments"
**Solution:**
1. Verify Square Application ID and Location ID
2. Ensure using sandbox credentials with sandbox script URL
3. Check that `#card-container` div exists in the DOM

### Issue: CORS error
**Solution:** Not needed in development mode with simulated backend

## Production Deployment

### Requirements for Production:
1. **Backend API:** Create an API endpoint at `/process-payment` that:
   - Receives the Square payment token
   - Calls Square Payments API to charge the card
   - Returns transaction result

2. **Environment Variables:** Update `.env` for production:
   ```env
   # Use production credentials (no "sandbox-" prefix)
   VITE_SQUARE_APPLICATION_ID=sq0idp-YOUR_PRODUCTION_APP_ID
   VITE_SQUARE_LOCATION_ID=YOUR_PRODUCTION_LOCATION_ID

   # Point to your backend API
   VITE_API_BASE_URL=https://api.yoursite.com
   ```

3. **Update index.html:** Change to production Square SDK:
   ```html
   <script src="https://web.squarecdn.com/v1/square.js"></script>
   ```
   (Remove "sandbox." from the URL)

4. **Backend Implementation Example:**
   ```javascript
   // Node.js/Express example
   app.post('/process-payment', async (req, res) => {
     const { token, amount, eventId } = req.body;

     const response = await squareClient.paymentsApi.createPayment({
       sourceId: token,
       amountMoney: {
         amount: amount.amount,
         currency: amount.currency
       },
       idempotencyKey: eventId
     });

     res.json({ transactionId: response.result.payment.id });
   });
   ```

## Security Notes

- ✅ Square handles all sensitive card data (PCI compliant)
- ✅ Only payment tokens are sent to your backend
- ✅ Test mode uses sandbox credentials (safe to commit)
- ❌ Never commit production Square credentials to git
- ❌ Never store card details in your database

## Support Resources

- [Square Web Payments SDK Docs](https://developer.squareup.com/docs/web-payments/overview)
- [Square Testing Guide](https://developer.squareup.com/docs/devtools/sandbox/payments)
- [Square API Reference](https://developer.squareup.com/reference/square)
- [Square Developer Discord](https://discord.gg/squaredev)

## Next Steps

1. ✅ Test payment form with various card numbers
2. ✅ Verify amount calculations for different scenarios
3. ✅ Test error handling with declined cards
4. ⬜ Integrate with calendar booking workflow
5. ⬜ Build backend API for production
6. ⬜ Add email confirmation after successful payment
7. ⬜ Implement refund processing for security deposits
