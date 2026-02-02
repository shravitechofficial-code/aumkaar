
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
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
import Admin from './pages/Admin';
import LeadCapturePopup from './components/LeadCapturePopup';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { dataService } from './services/dataService';

const App: React.FC = () => {
  // Sync data from database on mount
  useEffect(() => {
    dataService.init();
  }, []);

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
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        {/* Floating WhatsApp Button - Updated to site brand theme */}
        <a 
          href="https://wa.me/919988166977" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[60] btn-texture text-white p-4 rounded-full shadow-[0_10px_30px_rgba(160,80,53,0.3)] hover:scale-110 transition-all active:scale-95 group flex flex-row-reverse items-center gap-0 hover:gap-3"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle size={28} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-[10px] font-bold tracking-[0.2em] uppercase">
            WhatsApp Us
          </span>
        </a>

        <Footer />
        <LeadCapturePopup />
      </div>
    </Router>
  );
};

export default App;
