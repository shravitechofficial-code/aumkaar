
import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical, 
  ogImage = 'https://i.ibb.co/XZVGhG2h/Aumkaar-20260112-161626-0000.png', 
  ogType = 'website',
  schema 
}) => {
  useEffect(() => {
    // Update Document Title
    document.title = `${title} | Aumkaar`;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update OpenGraph tags
    const updateOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (el) el.setAttribute('content', content);
    };

    updateOg('og:title', title);
    updateOg('og:description', description);
    updateOg('og:image', ogImage);
    updateOg('og:type', ogType);

    // Update Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonical || window.location.href);
    }

    // Handle Schema.org JSON-LD
    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.id = 'json-ld-schema';
      document.head.appendChild(script);
      
      return () => {
        const existingScript = document.getElementById('json-ld-schema');
        if (existingScript) document.head.removeChild(existingScript);
      };
    }
  }, [title, description, canonical, ogImage, ogType, schema]);

  return null;
};

export default SEO;
