
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import LeadCapturePopup from './components/LeadCapturePopup';

// Simple placeholders for pages not fully detailed in the prompt
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="min-h-screen pt-32 bg-[#FDFBF7] flex flex-col items-center justify-center">
    <h1 className="text-4xl font-serif text-[#A05035] mb-4">{title}</h1>
    <p className="text-[#3E2723] opacity-70 font-light">Content coming soon.</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#FDFBF7]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/:memberId" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path="/shop" element={<PlaceholderPage title="Shop" />} />
            <Route path="/testimonials" element={<PlaceholderPage title="Testimonials" />} />
            {/* Catch-all route to redirect back to home for any undefined paths */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        {/* Site-wide lead capture popup */}
        <LeadCapturePopup />
      </div>
    </Router>
  );
};

export default App;
