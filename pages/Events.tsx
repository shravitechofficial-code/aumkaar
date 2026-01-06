
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EVENTS, FALLBACK_IMAGE } from '../constants';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const Events: React.FC = () => {
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
    <div className="bg-[#FDFBF7] min-h-screen pt-40 md:pt-48 pb-24 md:pb-40">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24">
        
        {/* Page Header */}
        <div className="text-center mb-24 md:mb-32">
          <span className="text-[#A05035] font-bold tracking-[0.5em] text-xs uppercase block mb-8">Sacred Gatherings</span>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-[#3E2723] mb-8 leading-tight">Upcoming Rituals</h1>
          <p className="text-[#3E2723] font-light max-w-2xl mx-auto text-xl md:text-2xl opacity-80 leading-relaxed">
            Join our community for immersive shared experiences designed to synchronize our collective resonance.
          </p>
        </div>

        {/* Events Feed */}
        <div className="space-y-32">
          {EVENTS.map((event, idx) => (
            <div key={event.id} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
              
              {/* Event Image */}
              <div className="w-full lg:w-1/2 group">
                <Link to={`/event/${event.id}`} className="block relative aspect-[4/3] overflow-hidden shadow-2xl border border-[#A05035]/10 bg-[#3E2723]">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                     <span className="bg-[#A05035] text-white px-6 py-2 text-[10px] font-bold tracking-[0.3em] uppercase shadow-lg">
                       {event.price} / Ticket
                     </span>
                  </div>
                </Link>
              </div>

              {/* Event Info */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <div className="flex items-center gap-4 text-[#A05035] font-bold tracking-[0.3em] text-[10px] uppercase mb-6">
                    <Calendar size={14} />
                    <span>{event.date}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#3E2723] leading-tight mb-8">
                    {event.title}
                  </h2>
                </div>

                <div className="space-y-5 text-[#3E2723]/70">
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="text-[#A05035] shrink-0 mt-1" />
                    <span className="text-lg md:text-xl font-light">{event.location}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock size={20} className="text-[#A05035] shrink-0 mt-1" />
                    <span className="text-lg md:text-xl font-light">{event.time}</span>
                  </div>
                </div>

                <p className="text-xl md:text-2xl text-[#3E2723] font-light leading-relaxed">
                  {event.shortDescription}
                </p>

                <div className="pt-8 flex flex-col sm:flex-row gap-6">
                  <Link to={`/event/${event.id}`} className="px-12 py-5 bg-[#3E2723] text-white text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#A05035] transition-all shadow-xl text-center">
                    VIEW DETAILS
                  </Link>
                  <Link to={`/event/${event.id}#register`} className="px-12 py-5 border border-[#3E2723]/20 text-[#3E2723] text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#F4EFE6] transition-all text-center">
                    RESERVE SPOT
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Private Event CTA */}
        <div className="mt-40 md:mt-56 bg-[#F4EFE6] p-12 md:p-24 lg:p-32 text-center border border-[#A05035]/5">
           <span className="text-[#A05035] font-bold tracking-[0.5em] text-[10px] uppercase block mb-8">Bespoke Circles</span>
           <h2 className="text-3xl md:text-5xl font-serif text-[#3E2723] mb-10 leading-tight">Planning a Private Group Experience?</h2>
           <p className="text-lg md:text-xl text-[#3E2723]/70 font-light max-w-2xl mx-auto mb-14">
             We curate intimate sound healing ceremonies for birthdays, weddings, or community gatherings at your chosen location or our sanctuary.
           </p>
           <Link to="/contact" className="inline-block px-12 py-5 bg-[#A05035] text-white text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#3E2723] transition-all shadow-xl">
             ENQUIRE ABOUT PRIVATE EVENTS
           </Link>
        </div>

      </div>
    </div>
  );
};

export default Events;
