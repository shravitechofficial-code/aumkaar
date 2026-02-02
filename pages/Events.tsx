
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FALLBACK_IMAGE } from '../constants';
import { dataService } from '../services/dataService';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Event as CalendarEvent } from '../types';

const Events: React.FC = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setEvents(dataService.getEvents());
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    if (target.src !== FALLBACK_IMAGE) {
      target.src = FALLBACK_IMAGE;
    }
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr.includes('-')) return dateStr;
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  const formatTime = (timeStr: string) => {
    if (!timeStr.includes(':')) return timeStr;
    const [hours, minutes] = timeStr.split(':');
    const h = parseInt(hours);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${h12}:${minutes} ${ampm}`;
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      
      {/* Refined Events Header Section */}
      <section className="pt-40 md:pt-52 pb-24 md:pb-32 bg-[#F4EFE6]/30 border-b border-[#A05035]/5">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24">
          <div className="max-w-4xl">
            <span className="text-[#A05035] font-bold tracking-[0.5em] text-[10px] sm:text-xs uppercase block mb-6">
              Sacred Gatherings
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#3E2723] mb-8 leading-tight">
              Upcoming <span className="font-serif-italic">Rituals</span>
            </h1>
            <p className="text-[#3E2723] font-light text-lg md:text-2xl opacity-90 leading-relaxed max-w-2xl">
              Join our community for immersive shared experiences designed to synchronize our collective resonance and restore natural harmony.
            </p>
          </div>
        </div>
      </section>

      {/* Events Listing */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24">
          <div className="space-y-32 md:space-y-48">
            {events.map((event, idx) => (
              <div key={event.id} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
                
                {/* Event Image */}
                <div className="w-full lg:w-1/2 group">
                  <Link to={`/event/${event.id}`} className="block relative aspect-[4/3] overflow-hidden shadow-2xl border border-[#A05035]/10 bg-[#3E2723] rounded-sm">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      onError={handleImageError}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-8 left-8">
                       <span className="bg-[#A05035] text-white px-6 py-2 text-[10px] font-bold tracking-[0.3em] uppercase shadow-xl border border-white/10">
                         {event.price} / Ticket
                       </span>
                    </div>
                  </Link>
                </div>

                {/* Event Details */}
                <div className="w-full lg:w-1/2 space-y-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[#A05035] font-bold tracking-[0.4em] text-[10px] uppercase">
                      <Calendar size={14} strokeWidth={2.5} />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#3E2723] leading-tight group-hover:text-[#A05035] transition-colors">
                      {event.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 border-y border-[#A05035]/10">
                    <div className="flex items-start gap-4">
                      <MapPin size={20} className="text-[#A05035] shrink-0 mt-1" />
                      <div>
                        <span className="block text-[9px] font-bold text-[#3E2723]/40 uppercase tracking-widest mb-1">Location</span>
                        {event.locationLink ? (
                          <a href={event.locationLink} target="_blank" rel="noopener noreferrer" className="text-lg text-[#3E2723] font-medium hover:text-[#A05035] underline decoration-[#A05035]/20">
                            {event.location}
                          </a>
                        ) : (
                          <span className="text-lg text-[#3E2723] font-medium">{event.location}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock size={20} className="text-[#A05035] shrink-0 mt-1" />
                      <div>
                        <span className="block text-[9px] font-bold text-[#3E2723]/40 uppercase tracking-widest mb-1">Time</span>
                        <span className="text-lg text-[#3E2723] font-medium">{formatTime(event.time)}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg md:text-xl text-[#3E2723]/80 font-light leading-relaxed">
                    {event.shortDescription}
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row gap-6">
                    <Link 
                      to={`/event/${event.id}`} 
                      className="flex-grow sm:flex-grow-0 px-12 py-5 bg-[#3E2723] text-white text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#A05035] transition-all shadow-xl text-center flex items-center justify-center gap-3"
                    >
                      VIEW DETAILS <ArrowRight size={16} />
                    </Link>
                    <Link 
                      to={`/event/${event.id}#register`} 
                      className="flex-grow sm:flex-grow-0 px-12 py-5 border border-[#3E2723] text-[#3E2723] text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#3E2723] hover:text-[#FDFBF7] transition-all text-center"
                    >
                      RESERVE SPOT
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Group CTA Section */}
      <section className="py-32 md:py-48 bg-[#F4EFE6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A05035]/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24 text-center relative z-10">
           <span className="text-[#A05035] font-bold tracking-[0.5em] text-[10px] sm:text-xs uppercase block mb-10">
             Bespoke Circles
           </span>
           <h2 className="text-4xl md:text-6xl font-serif text-[#3E2723] mb-10 leading-tight max-w-4xl mx-auto">
             Planning a <span className="font-serif-italic">Private Group</span> Experience?
           </h2>
           <p className="text-lg md:text-2xl text-[#3E2723]/80 font-light max-w-3xl mx-auto mb-16 leading-relaxed">
             We curate intimate sound healing ceremonies for birthdays, weddings, or community gatherings at your chosen location or our sanctuary.
           </p>
           <Link 
             to="/contact" 
             className="inline-block px-14 py-6 bg-[#A05035] text-white text-[11px] font-bold tracking-[0.5em] uppercase hover:bg-[#3E2723] transition-all shadow-2xl btn-texture"
           >
             ENQUIRE ABOUT PRIVATE EVENTS
           </Link>
        </div>
      </section>

    </div>
  );
};

export default Events;
