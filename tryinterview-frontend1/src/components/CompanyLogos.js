import React from 'react';

// Simplified company logo components with recognizable designs
export const CompanyLogos = () => {
  const logos = [
    // Google - Stylized G
    <svg key="google" className="company-logo-svg" viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
      <text x="5" y="30" fontSize="28" fontWeight="700" fontFamily="'Product Sans', sans-serif" fill="currentColor">Google</text>
    </svg>,
    
    // Microsoft - Four squares
    <svg key="microsoft" className="company-logo-svg" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="8" width="12" height="12" fill="currentColor" opacity="0.7"/>
      <rect x="19" y="8" width="12" height="12" fill="currentColor" opacity="0.5"/>
      <rect x="5" y="22" width="12" height="12" fill="currentColor" opacity="0.6"/>
      <rect x="19" y="22" width="12" height="12" fill="currentColor" opacity="0.8"/>
      <text x="38" y="28" fontSize="20" fontWeight="600" fill="currentColor">Microsoft</text>
    </svg>,
    
    // Amazon - with smile arrow
    <svg key="amazon" className="company-logo-svg" viewBox="0 0 110 40" xmlns="http://www.w3.org/2000/svg">
      <text x="5" y="26" fontSize="26" fontWeight="700" fill="currentColor">amazon</text>
      <path d="M15 32 Q50 36 85 32" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7"/>
    </svg>,
    
    // Apple - Apple icon
    <svg key="apple" className="company-logo-svg" viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="12" fill="currentColor" opacity="0.8"/>
      <circle cx="22" cy="14" r="3" fill="currentColor"/>
      <text x="38" y="26" fontSize="20" fontWeight="600" fill="currentColor">Apple</text>
    </svg>,
    
    // Meta
    <svg key="meta" className="company-logo-svg" viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
      <text x="5" y="28" fontSize="24" fontWeight="700" fill="currentColor">Meta</text>
    </svg>,
    
    // Netflix - Bold N
    <svg key="netflix" className="company-logo-svg" viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
      <text x="5" y="28" fontSize="24" fontWeight="900" fill="currentColor">NETFLIX</text>
    </svg>,
    
    // Tesla - T logo
    <svg key="tesla" className="company-logo-svg" viewBox="0 0 90 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 12 L15 28 M10 12 L20 12" stroke="currentColor" strokeWidth="3" fill="none"/>
      <text x="28" y="26" fontSize="22" fontWeight="600" fill="currentColor">TESLA</text>
    </svg>,
    
    // IBM - Stripes
    <svg key="ibm" className="company-logo-svg" viewBox="0 0 70 40" xmlns="http://www.w3.org/2000/svg">
      <text x="5" y="28" fontSize="26" fontWeight="700" fill="currentColor" letterSpacing="2">IBM</text>
    </svg>,
    
    // Oracle
    <svg key="oracle" className="company-logo-svg" viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="20" rx="15" ry="10" fill="none" stroke="currentColor" strokeWidth="2"/>
      <text x="40" y="26" fontSize="20" fontWeight="600" fill="currentColor">Oracle</text>
    </svg>,
    
    // Salesforce - Cloud
    <svg key="salesforce" className="company-logo-svg" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="18" r="6" fill="currentColor" opacity="0.6"/>
      <circle cx="22" cy="16" r="8" fill="currentColor" opacity="0.5"/>
      <circle cx="18" cy="24" r="5" fill="currentColor" opacity="0.7"/>
      <text x="32" y="26" fontSize="18" fontWeight="600" fill="currentColor">Salesforce</text>
    </svg>,
    
    // Adobe
    <svg key="adobe" className="company-logo-svg" viewBox="0 0 90 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 30 L15 10 L22 30 Z" fill="currentColor" opacity="0.8"/>
      <text x="30" y="26" fontSize="20" fontWeight="600" fill="currentColor">Adobe</text>
    </svg>,
    
    // Uber
    <svg key="uber" className="company-logo-svg" viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
      <text x="5" y="28" fontSize="24" fontWeight="700" fill="currentColor">Uber</text>
    </svg>,
    
    // Airbnb
    <svg key="airbnb" className="company-logo-svg" viewBox="0 0 90 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 25 Q20 10 15 10 Q10 10 15 25" fill="currentColor" opacity="0.7"/>
      <text x="25" y="26" fontSize="20" fontWeight="600" fill="currentColor">Airbnb</text>
    </svg>,
    
    // Spotify - Sound waves
    <svg key="spotify" className="company-logo-svg" viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="20" r="12" fill="currentColor" opacity="0.2"/>
      <path d="M10 18 Q18 16 26 18 M10 20 Q18 18 26 20 M10 22 Q18 20 26 22" stroke="currentColor" strokeWidth="2" fill="none"/>
      <text x="35" y="26" fontSize="19" fontWeight="600" fill="currentColor">Spotify</text>
    </svg>,
    
    // LinkedIn - in
    <svg key="linkedin" className="company-logo-svg" viewBox="0 0 110 40" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="10" width="25" height="20" rx="3" fill="currentColor" opacity="0.7"/>
      <text x="34" y="26" fontSize="19" fontWeight="600" fill="currentColor">LinkedIn</text>
    </svg>,
    
    // Twitter/X
    <svg key="twitter" className="company-logo-svg" viewBox="0 0 90 40" xmlns="http://www.w3.org/2000/svg">
      <text x="5" y="28" fontSize="30" fontWeight="900" fill="currentColor">𝕏</text>
      <text x="35" y="26" fontSize="19" fontWeight="600" fill="currentColor">Twitter</text>
    </svg>,
    
    // Dropbox
    <svg key="dropbox" className="company-logo-svg" viewBox="0 0 110 40" xmlns="http://www.w3.org/2000/svg">
      <polygon points="15,12 20,16 15,20 10,16" fill="currentColor" opacity="0.7"/>
      <polygon points="15,20 20,24 15,28 10,24" fill="currentColor" opacity="0.5"/>
      <text x="28" y="26" fontSize="19" fontWeight="600" fill="currentColor">Dropbox</text>
    </svg>,
    
    // Slack - Hash
    <svg key="slack" className="company-logo-svg" viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15 L18 15 M15 12 L15 18 M12 22 L18 22 M15 19 L15 25" stroke="currentColor" strokeWidth="3" opacity="0.7"/>
      <text x="26" y="26" fontSize="20" fontWeight="600" fill="currentColor">Slack</text>
    </svg>,
    
    // Zoom
    <svg key="zoom" className="company-logo-svg" viewBox="0 0 85 40" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="14" width="18" height="12" rx="2" fill="currentColor" opacity="0.6"/>
      <circle cx="20" cy="20" r="3" fill="currentColor"/>
      <text x="28" y="26" fontSize="20" fontWeight="600" fill="currentColor">Zoom</text>
    </svg>,
    
    // Stripe
    <svg key="stripe" className="company-logo-svg" viewBox="0 0 90 40" xmlns="http://www.w3.org/2000/svg">
      <text x="5" y="28" fontSize="24" fontWeight="600" fill="currentColor">Stripe</text>
    </svg>,
    
    // Shopify
    <svg key="shopify" className="company-logo-svg" viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 10 L15 28 L20 25 L20 13 Z" fill="currentColor" opacity="0.7"/>
      <text x="26" y="26" fontSize="19" fontWeight="600" fill="currentColor">Shopify</text>
    </svg>,
    
    // PayPal
    <svg key="paypal" className="company-logo-svg" viewBox="0 0 95 40" xmlns="http://www.w3.org/2000/svg">
      <text x="5" y="28" fontSize="22" fontWeight="700" fill="currentColor">PayPal</text>
    </svg>,
    
    // Intel
    <svg key="intel" className="company-logo-svg" viewBox="0 0 75 40" xmlns="http://www.w3.org/2000/svg">
      <text x="5" y="28" fontSize="24" fontWeight="700" fill="currentColor">intel</text>
    </svg>,
    
    // Cisco
    <svg key="cisco" className="company-logo-svg" viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="2" height="16" fill="currentColor" opacity="0.8"/>
      <rect x="12" y="10" width="2" height="20" fill="currentColor" opacity="0.6"/>
      <rect x="16" y="14" width="2" height="12" fill="currentColor" opacity="0.7"/>
      <rect x="20" y="12" width="2" height="16" fill="currentColor" opacity="0.5"/>
      <text x="28" y="26" fontSize="20" fontWeight="600" fill="currentColor">Cisco</text>
    </svg>,
    
    // NVIDIA
    <svg key="nvidia" className="company-logo-svg" viewBox="0 0 95 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10 L15 20 L8 30 M12 10 L19 20 L12 30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7"/>
      <text x="24" y="26" fontSize="20" fontWeight="700" fill="currentColor">NVIDIA</text>
    </svg>,
  ];

  return (
    <>
      {logos}
      {/* Duplicate for seamless loop */}
      {logos}
    </>
  );
};
