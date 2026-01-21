
import React from 'react';

export interface Service {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  price: string;
  image: string;
  benefits: string[];
  details?: ServiceDetails;
}

export interface ServiceDetails {
  whatItIs?: { description: string; points: string[]; closing?: string };
  whatYouExperience?: string[];
  whoItIsFor?: string[];
  format?: string[];
  frequency?: string;
  preSession?: string[];
  postSession?: string[];
  safety?: { note: string; conditions: string[]; closing?: string };
  faqs?: { question: string; answer: string | string[] }[];
  
  whyItWorks?: {
    title: string;
    intro?: string;
    points: { title?: string; description: string }[];
  };
  sessionFlow?: {
    title: string;
    description?: string;
    points?: string[];
  }[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  locationLink?: string;
  price: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  capacity: string;
  highlights: string[];
  itinerary: { time: string; activity: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string; // Changed from React.ReactNode to string (HTML)
  image: string;
  readTime: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  location: string;
}

export interface NavItem {
  label: string;
  path?: string;
  submenu?: { 
    label: string; 
    path?: string;
    isHeader?: boolean;
  }[];
}
