// Price IDs from environment variables
export const STRIPE_PRICES = {
  starter: process.env.REACT_APP_STRIPE_PRICE_STARTER,
  professional: process.env.REACT_APP_STRIPE_PRICE_PROFESSIONAL,
  premium: process.env.REACT_APP_STRIPE_PRICE_PREMIUM,
  enterprise: process.env.REACT_APP_STRIPE_PRICE_ENTERPRISE,
};

/**
 * Redirect to Stripe Checkout for subscription
 * @param {string} priceId - The Stripe Price ID
 * @param {object} user - The authenticated user object
 * @returns {Promise} Stripe checkout redirect
 */
export const createCheckoutSession = async (priceId, user) => {
  try {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3002';
    
    // Call backend API to create checkout session
    const response = await fetch(`${BACKEND_URL}/api/create-checkout-session`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        userId: user.uid,
        email: user.email
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create checkout session');
    }

    const { url } = await response.json();
    
    // Redirect to Stripe Checkout
    if (url) {
      window.location.href = url;
    } else {
      throw new Error('No checkout URL received from backend');
    }
  } catch (error) {
    throw error;
  }
};

/**
 * Create a customer portal session for managing subscriptions
 * @param {string} customerId - The Stripe Customer ID
 * @returns {Promise} Redirect to customer portal
 */
export const createPortalSession = async (customerId) => {
  try {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3002';
    
    const response = await fetch(`${BACKEND_URL}/api/create-portal-session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customerId }),
    });

    if (!response.ok) {
      throw new Error('Failed to create portal session');
    }

    const { url } = await response.json();
    window.location.href = url;
  } catch (error) {
    throw error;
  }
};

/**
 * Check if Stripe is properly configured
 * @returns {boolean} True if Stripe keys are present
 */
export const isStripeConfigured = () => {
  return !!(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY &&
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY !== 'pk_test_your_publishable_key_here'
  );
};
