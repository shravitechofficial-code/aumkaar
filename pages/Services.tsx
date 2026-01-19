
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FALLBACK_IMAGE } from '../constants';
import { ArrowRight, Clock, Banknote, Star } from 'lucide-react';
import { dataService } from '../services/dataService';

const Services: React.FC = () => {
  const services = dataService.getServices();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (target.src !== FALLBACK_IMAGE) {
      target.src = FALLBACK_IMAGE;
    }
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-40 md:pt-48 lg:pt-52 pb-24 md:pb-40">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24">
        
        {/* Page Header */}
        <div className="text-center mb-20 md:mb-24 lg:mb-32 px-4">
          <span className="text-[#A05035] font-bold tracking-[0.5em] text-xs uppercase block mb-8">Guided Journeys</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-[#3E2723] mb-8 leading-tight">Our Sacred Offerings</h1>
          <p className="text-[#3E2723] font-light max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl opacity-80 leading-relaxed">
            Discover a range of vibrational and mindfulness sessions tailored to restore your inner rhythm and master your mind.
          </p>
        </div>

        {/* Sessions Grid - 2 columns on tablets, 3 on large desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-20 md:gap-y-24">
          {services.map((service) => (
            <div key={service.id} className="group flex flex-col relative">
              
              {/* Image Container */}
              <Link to={`/service/${service.id}`} className="relative aspect-[3/4] overflow-hidden bg-[#F4EFE6] mb-8 md:mb-10 shadow-xl border border-[#A05035]/10 block transform transition-transform duration-700 hover:-translate-y-3">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 opacity-95 group-hover:opacity-100"
                  onError={handleImageError}
                />
                
                <div className="absolute inset-0 bg-[#3E2723]/10 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-[#FDFBF7] text-[#A05035] px-8 py-3 text-[10px] font-bold tracking-[0.4em] transform translate-y-4 hover:translate-y-0 transition-transform duration-500 shadow-2xl uppercase">
                    Explore Session
                  </div>
                </div>

                <div className="absolute top-8 right-8 text-[#FDFBF7] opacity-40 pointer-events-none">
                  <Star size={24} strokeWidth={1} />
                </div>
              </Link>
              
              <div className="flex-grow px-2 flex flex-col">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <span className="text-[#A05035] font-bold tracking-[0.3em] text-[10px] uppercase py-1 px-4 border border-[#A05035]/20">
                    {service.category}
                  </span>
                </div>

                <Link to={`/service/${service.id}`}>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#3E2723] mb-5 md:mb-6 group-hover:text-[#A05035] transition-colors leading-tight">
                    {service.title}
                  </h3>
                </Link>

                <div className="flex items-center gap-6 mb-6 text-[#3E2723] border-y border-[#A05035]/10 py-4">
                  <div className="flex items-center">
                    <Clock size={14} className="text-[#A05035] mr-2" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">{service.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Banknote size={14} className="text-[#A05035] mr-2" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">{service.price}</span>
                  </div>
                </div>

                <p className="text-[#3E2723] text-base leading-relaxed font-light opacity-75 mb-10 line-clamp-3">
                  {service.shortDescription}
                </p>
                
                <div className="mt-auto space-y-4">
                  <Link to="/contact" className="block w-full text-center py-4 bg-[#A05035] text-[#FDFBF7] text-[10px] font-bold tracking-[0.4em] hover:bg-[#3E2723] transition-all duration-300 shadow-lg uppercase">
                    Contact Us
                  </Link>

                  <Link to={`/service/${service.id}`} className="flex items-center justify-center text-[#A05035] font-bold text-[9px] tracking-[0.3em] uppercase opacity-70 hover:opacity-100 transition-all py-2">
                    <span>View Session Details</span>
                    <ArrowRight size={14} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation CTA */}
        <div className="mt-40 md:mt-48 lg:mt-56 text-center bg-[#A05035] p-10 md:p-16 lg:p-24 xl:p-32 shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
           
           <div className="relative z-10 px-4">
             <span className="text-[#FDFBF7] opacity-60 font-bold tracking-[0.5em] text-xs uppercase mb-8 block">Bespoke Experiences</span>
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-8 text-[#FDFBF7] leading-tight">Seeking a Tailored Journey?</h2>
             <p className="mb-12 font-light max-w-2xl mx-auto text-[#FDFBF7] opacity-90 text-lg md:text-xl lg:text-2xl leading-relaxed">
               Reach out to us for a private consultation to design a session specifically for your energetic needs.
             </p>
             <Link to="/contact" className="px-12 md:px-16 py-6 bg-[#FDFBF7] text-[#A05035] font-bold tracking-[0.4em] text-[11px] hover:bg-[#3E2723] hover:text-[#FDFBF7] transition-all inline-block shadow-2xl">
               CONNECT WITH US
             </Link>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
