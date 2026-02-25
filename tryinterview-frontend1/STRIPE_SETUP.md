# Stripe Payment Integration Setup Guide

This guide will help you set up Stripe payment integration for TryInterview subscription plans.

## Prerequisites

- A Stripe account (Sign up at https://stripe.com)
- Node.js and npm installed
- TryInterview project running locally

## Step 1: Get Your Stripe API Keys

1. Log in to your Stripe Dashboard: https://dashboard.stripe.com
2. Navigate to **Developers → API keys**
3. Copy your **Publishable key** (starts with `pk_test_` for test mode)
4. Keep this key handy for the next step

## Step 2: Create Subscription Products and Prices

1. In Stripe Dashboard, go to **Products → Add product**
2. Create **4 products** with the following details:

### Product 1: Starter Plan
- **Name**: Starter Plan
- **Description**: Basic interview preparation
- **Pricing**: $9.00 USD / month
- **Billing period**: Monthly recurring
- Copy the **Price ID** (starts with `price_`)

### Product 2: Professional Plan
- **Name**: Professional Plan
- **Description**: Advanced interview preparation
- **Pricing**: $25.00 USD / month
- **Billing period**: Monthly recurring
- Copy the **Price ID**

### Product 3: Premium Plan
- **Name**: Premium Plan
- **Description**: Premium coaching and preparation
- **Pricing**: $50.00 USD / month
- **Billing period**: Monthly recurring
- Copy the **Price ID**

### Product 4: Enterprise Plan
- **Name**: Enterprise Plan
- **Description**: Complete enterprise solution
- **Pricing**: $99.00 USD / month
- **Billing period**: Monthly recurring
- Copy the **Price ID**

## Step 3: Configure Environment Variables

1. Copy the `.env.example` file to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and add your Stripe keys:
   ```env
   # Stripe Configuration
   REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_ACTUAL_KEY_HERE
   
   # Stripe Price IDs
   REACT_APP_STRIPE_PRICE_STARTER=price_YOUR_STARTER_PRICE_ID
   REACT_APP_STRIPE_PRICE_PROFESSIONAL=price_YOUR_PROFESSIONAL_PRICE_ID
   REACT_APP_STRIPE_PRICE_PREMIUM=price_YOUR_PREMIUM_PRICE_ID
   REACT_APP_STRIPE_PRICE_ENTERPRISE=price_YOUR_ENTERPRISE_PRICE_ID
   ```

3. Save the file

## Step 4: Restart Your Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm start
```

The app will now load with your Stripe configuration.

## Step 5: Test the Integration

1. Sign in to your TryInterview dashboard
2. Navigate to the **Subscription** tab
3. Click **"Choose Plan"** on any tier (except Professional which shows "Current Plan")
4. You should be redirected to Stripe Checkout
5. Use Stripe test card: `4242 4242 4242 4242`
   - Any future expiry date
   - Any 3-digit CVC
   - Any billing ZIP code

## How It Works

### Frontend Integration
- **Stripe.js Library**: Loaded via `@stripe/stripe-js` package
- **Checkout Flow**: Users click "Choose Plan" → Redirected to Stripe Checkout
- **Success/Cancel URLs**: Users return to dashboard after payment

### Files Modified
1. `src/services/stripeService.js` - Stripe integration service
2. `src/components/Dashboard.js` - Subscription page with payment buttons
3. `.env.example` - Environment variable template
4. `STRIPE_SETUP.md` - This setup guide

### Success/Cancel URLs
- **Success**: `http://localhost:3001/#dashboard/subscription?success=true`
- **Cancel**: `http://localhost:3001/#dashboard/subscription?canceled=true`

## Production Setup

For production deployment:

1. Switch to **Live mode** in Stripe Dashboard
2. Create the same 4 products in Live mode
3. Get your **Live API keys** (start with `pk_live_`)
4. Update your production environment variables:
   - Vercel: Project Settings → Environment Variables
   - Add all `REACT_APP_STRIPE_*` variables
5. Redeploy your application

## Backend Integration (Next Steps)

For a complete production setup, you'll need:

1. **Backend API** to create checkout sessions
2. **Webhooks** to handle subscription events
3. **Customer Portal** for subscription management
4. **Database** to store subscription status

Example backend endpoints needed:
- `POST /api/create-checkout-session` - Create Stripe checkout
- `POST /api/create-portal-session` - Access billing portal
- `POST /api/webhooks/stripe` - Handle Stripe events

## Troubleshooting

### "Stripe is not configured" Alert
- Make sure `.env.local` exists
- Verify all Stripe keys are correctly copied
- Restart the development server

### Checkout Not Working
- Check browser console for errors
- Verify Price IDs are correct
- Ensure you're using test mode keys for development

### No Redirect to Checkout
- Check that Stripe.js loaded properly
- Verify publishable key is valid
- Check network tab for API errors

## Security Notes

- ✅ `.env.local` is in `.gitignore` - your keys are safe
- ✅ Never commit Stripe secret keys to git
- ✅ Use test keys for development
- ✅ Use live keys only in production environment variables

## Support

- Stripe Documentation: https://stripe.com/docs
- Stripe Testing: https://stripe.com/docs/testing
- TryInterview Support: support@tryinterview.com

---

**Ready to accept payments!** 🎉

Once configured, users can subscribe to any plan and payments will be processed through Stripe.
