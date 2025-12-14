import React, { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      // Check if script is already added
      if (document.getElementById('google-translate-script')) {
        return;
      }

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.id = 'google-translate-script';
      script.async = true;
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

      // Initialize Google Translate
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,ms,zh-CN,ta,es,fr,de,it,ja,ko,pt,ru',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            'google_translate_element'
          );
        }
      };

      document.body.appendChild(script);
    };

    // Add script after component mounts
    addGoogleTranslateScript();

    // Cleanup
    return () => {
      const script = document.getElementById('google-translate-script');
      if (script) {
        script.remove();
      }
      const element = document.getElementById('google_translate_element');
      if (element) {
        element.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      className="google-translate-container"
      style={{
        opacity: 0.9,
      }}
    />
  );
};

// Custom CSS for Google Translate (to be added to index.css)
export const googleTranslateStyles = `
  .goog-te-banner-frame.skiptranslate {
    display: none !important;
  }

  body {
    top: 0px !important;
  }

  .goog-te-gadget {
    font-family: inherit !important;
  }

  .goog-te-gadget .goog-te-combo {
    margin: 0 !important;
    padding: 4px 8px !important;
    border-radius: 8px !important;
    border: 1px solid #FF6B9D !important;
    background: white !important;
    color: #2D3436 !important;
    font-size: 14px !important;
    outline: none !important;
    cursor: pointer !important;
  }

  .goog-te-gadget .goog-te-combo:hover {
    border-color: #FF4757 !important;
    box-shadow: 0 0 0 3px rgba(255, 75, 87, 0.1) !important;
  }

  .goog-te-gadget-simple {
    background: transparent !important;
    border: none !important;
  }

  .goog-te-gadget-simple .goog-te-menu-value span {
    color: #636E72 !important;
  }

  .goog-te-gadget-simple .goog-te-menu-value:hover {
    color: #FF6B9D !important;
  }

  .goog-te-gadget-icon {
    display: none !important;
  }

  #google_translate_element {
    display: inline-block;
  }

  .goog-te-gadget .goog-te-combo option {
    color: #2D3436 !important;
    background: white !important;
  }
`;

export default GoogleTranslate;