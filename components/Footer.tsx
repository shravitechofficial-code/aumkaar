
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, MapPin } from 'lucide-react';
import { SERVICES } from '../constants';
import { LOGOS } from '../assets/logos';

const Footer: React.FC = () => {
  const personalSessions = SERVICES.filter(s => s.category !== 'Corporate Wellness');
  const corporateSessions = SERVICES.filter(s => s.category === 'Corporate Wellness');

  return (
    <footer className="bg-[#A05035] text-[#FDFBF7] pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand & Description */}
          <div className="space-y-8 lg:col-span-2">
            <Link to="/">
              <img src={LOGOS.ON_DARK} alt="Aumkaar Logo" className="h-16 md:h-20 w-auto object-contain" />
            </Link>
            <p className="text-sm opacity-90 leading-relaxed font-normal max-w-sm">
              Restoring harmony to the mind, body, and soul through the ancient power of sound and stillness. Experience the resonance of peace.
            </p>
            <div className="space-y-4 text-sm opacity-90 font-normal pt-4 border-t border-[#FDFBF7]/20 max-w-xs">
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 mt-0.5 shrink-0" />
                <span>123 Serenity Lane,<br/>Wellness District, CA 90210</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 shrink-0" />
                <a href="mailto:hello@aumkaar.com" className="hover:underline">hello@aumkaar.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif italic text-[#FDFBF7]">Explore</h4>
            <ul className="space-y-3 text-sm opacity-90 font-normal">
              <li><Link to="/" className="hover:text-white hover:underline transition-all">Home</Link></li>
              <li><Link to="/about" className="hover:text-white hover:underline transition-all">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white hover:underline transition-all font-bold">All Offerings</Link></li>
              <li><Link to="/blog" className="hover:text-white hover:underline transition-all">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:underline transition-all">Contact Us</Link></li>
            </ul>
          </div>

          {/* Personal Sessions Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif italic text-[#FDFBF7]">Personal Sessions</h4>
            <ul className="space-y-3 text-[13px] opacity-90 font-normal">
              {personalSessions.map((service) => {
                const serviceName = service.title.split(' : ')[0];
                return (
                  <li key={service.id}>
                    <Link 
                      to={`/service/${service.id}`} 
                      className="hover:text-white hover:underline transition-all block py-0.5"
                    >
                      {serviceName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Corporate Wellness Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif italic text-[#FDFBF7]">Corporate</h4>
            <ul className="space-y-3 text-[13px] opacity-90 font-normal">
              {corporateSessions.map((service) => {
                const serviceName = service.title.split(' : ')[0];
                return (
                  <li key={service.id}>
                    <Link 
                      to={`/service/${service.id}`} 
                      className="hover:text-white hover:underline transition-all block py-0.5"
                    >
                      {serviceName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Newsletter & Bottom Socials */}
        <div className="mt-20 pt-12 border-t border-[#FDFBF7]/10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div className="max-w-md w-full">
            <h4 className="text-lg font-serif italic text-[#FDFBF7] mb-4">Newsletter</h4>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow bg-[#FDFBF7]/10 border border-[#FDFBF7]/20 text-[#FDFBF7] px-6 py-3 text-sm focus:outline-none focus:border-[#FDFBF7] rounded-full placeholder-[#FDFBF7]/50"
              />
              <button className="whitespace-nowrap bg-[#FDFBF7] text-[#A05035] text-[10px] px-8 py-3.5 font-bold tracking-[0.2em] hover:bg-[#3E2723] hover:text-[#FDFBF7] transition-all rounded-full shadow-md uppercase">
                SUBSCRIBE
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-8">
            <a 
              href="https://www.youtube.com/@thatmeditationcouple" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors flex items-center gap-2" 
              aria-label="YouTube"
            >
              <Youtube size={20} /> 
              <span className="text-[10px] font-bold tracking-widest uppercase hidden sm:inline">YouTube</span>
            </a>
            <a 
              href="https://www.instagram.com/thatmeditationcouple/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors flex items-center gap-2" 
              aria-label="Instagram"
            >
              <Instagram size={20} /> 
              <span className="text-[10px] font-bold tracking-widest uppercase hidden sm:inline">Instagram</span>
            </a>
            <a 
              href="https://www.facebook.com/people/That-meditation-couple/61567859990598/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors flex items-center gap-2" 
              aria-label="Facebook"
            >
              <Facebook size={20} /> 
              <span className="text-[10px] font-bold tracking-widest uppercase hidden sm:inline">Facebook</span>
            </a>
          </div>
        </div>

        <div className="mt-16 text-center text-[10px] opacity-60 font-normal flex flex-col md:flex-row justify-between items-center tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Aumkaar Wellness. All rights reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
