import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}

// GA4 tracking ID
const GA_ID = import.meta.env.VITE_GA_ID || 'G-XXXXXXXXXX';

// Initialize GA4
export function initializeGA(): void {
  if (typeof window !== 'undefined' && !window.gtag) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    script.onload = () => {
      window.gtag('js', String(new Date().getTime()));
      window.gtag('config', GA_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });
    };
  }
}

// Track page views
export function trackPageView(title?: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_ID, {
      page_title: title || document.title,
      page_location: window.location.href,
    });
  }
}

// Track custom events
export function trackEvent(eventName: string, parameters?: Record<string, any>): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...parameters,
      custom_map: {
        custom_parameter_1: 'parameter_1',
        custom_parameter_2: 'parameter_2',
      },
    });
  }
}

// Custom hook for analytics
export function useAnalytics(): {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (title?: string) => void;
} {
  useEffect(() => {
    initializeGA();
  }, []);

  return {
    trackEvent,
    trackPageView,
  };
}