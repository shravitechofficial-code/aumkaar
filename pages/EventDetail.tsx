
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FALLBACK_IMAGE } from '../constants';
import { dataService } from '../services/dataService';
import { Calendar, MapPin, Clock, Users, Check, ArrowLeft, Loader2, Star } from 'lucide-react';
import { submitForm } from '../services/submissionService';

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', guests: '1', preferredDate: '', preferredTime: '' });

  const events = dataService.getEvents();
  const event = events.find(e => e.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (target.src !== FALLBACK_IMAGE) {
      target.src = FALLBACK_IMAGE;
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const success = await submitForm({
      timestamp: new Date().toISOString(),
      formType: 'Event Registration',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: event?.title || 'Unknown Event',
      message: `Guests Count: ${formData.guests}`,
      pageUrl: window.location.href,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime
    });

    if (success) {
      setFormStatus('success');
    } else {
      alert('Problem with registration. Please try again.');
      setFormStatus('idle');
    }
  };

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
        <div className="text-center px-10">
          <h2 className="text-3xl font-serif text-[#A05035]">Event not found</h2>
          <button onClick={() => navigate('/events')} className="mt-8 text-[#3E2723] underline font-bold tracking-widest uppercase text-xs">Back to Events</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      {/* Refined Transparency in Event Hero */}
      <div className="relative w-full h-[60vh] md:h-[75vh] bg-[#3E2723] overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover opacity-92 scale-105 animate-[slow-zoom_30s_infinite_alternate]"
          onError={handleImageError}
        />
        {/* Layer Transparency increased: From black/25 (implied) to black/10 */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[0.2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7]/90 via-transparent to-black/5"></div>
        <div className="absolute inset-0 flex items-center justify-center pt-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <button onClick={() => navigate('/events')} className="inline-flex items-center gap-2 text-white hover:text-[#A05035] text-[10px] font-bold tracking-[0.3em] uppercase mb-8 transition-colors drop-shadow-lg">
              <ArrowLeft size={16} /> Back to Events
            </button>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-8 drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]">{event.title}</h1>
            <div className="mt-12 inline-flex flex-wrap justify-center gap-8 md:gap-12 bg-black/20 backdrop-blur-xl px-10 py-6 rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3 text-white">
                <Calendar size={22} className="text-[#A05035]" />
                <span className="text-lg md:text-xl font-light tracking-wide">{event.date}</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Clock size={22} className="text-[#A05035]" />
                <span className="text-lg md:text-xl font-light tracking-wide">{event.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          <div className="lg:w-2/3 space-y-20">
            <section className="space-y-8">
              <span className="text-[#A05035] font-bold tracking-[0.5em] text-[10px] uppercase block">The Experience</span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#3E2723]">About the Gathering</h2>
              <p className="text-xl md:text-2xl text-[#3E2723] font-light leading-relaxed">{event.fullDescription}</p>
            </section>
            {event.highlights && event.highlights.length > 0 && (
              <section className="space-y-12">
                <h3 className="text-3xl font-serif text-[#3E2723]">Event Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-4 p-6 bg-white border border-[#A05035]/5 shadow-sm">
                      <Star className="text-[#A05035] shrink-0 mt-1" size={18} />
                      <span className="text-lg text-[#3E2723]/80">{h}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div id="register" className="lg:w-1/3">
            <div className="sticky top-32 space-y-10">
              <div className="bg-white p-10 md:p-12 shadow-2xl border border-[#F4EFE6] relative overflow-hidden">
                <h3 className="text-xs font-bold text-[#A05035] mb-8 uppercase tracking-[0.4em]">Event Info</h3>
                <div className="space-y-8 mb-12">
                  <div className="flex items-center gap-5"><MapPin className="text-[#A05035]" size={20} /><span className="text-lg text-[#3E2723] font-light">{event.location}</span></div>
                  <div className="flex items-center gap-5"><Users className="text-[#A05035]" size={20} /><span className="text-lg text-[#3E2723] font-bold">{event.capacity}</span></div>
                  <div className="pt-6 border-t border-[#F4EFE6] flex justify-between items-center"><span className="text-sm uppercase tracking-widest text-[#3E2723]/60">Ticket Price</span><span className="text-3xl font-serif text-[#A05035]">{event.price}</span></div>
                </div>
                {formStatus === 'success' ? (
                  <div className="text-center py-10 animate-fade-in"><Check size={40} className="text-[#A05035] mx-auto mb-6" /><h4 className="text-2xl font-serif text-[#3E2723] mb-4">Registration Received</h4><p className="text-[#3E2723]/60 font-light mb-8">We will connect with you shortly via email.</p></div>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-5">
                    <input required disabled={formStatus === 'submitting'} type="text" placeholder="Full Name" className="w-full bg-[#FDFBF7] border-b border-[#A05035]/20 p-4 text-sm focus:outline-none focus:border-[#A05035] transition-all disabled:opacity-50" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    <input required disabled={formStatus === 'submitting'} type="email" placeholder="Email Address" className="w-full bg-[#FDFBF7] border-b border-[#A05035]/20 p-4 text-sm focus:outline-none focus:border-[#A05035] transition-all disabled:opacity-50" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    <div className="grid grid-cols-2 gap-3">
                      <input disabled={formStatus === 'submitting'} type="date" className="w-full bg-[#FDFBF7] border-b border-[#A05035]/20 p-4 text-xs focus:outline-none focus:border-[#A05035] transition-all disabled:opacity-50" value={formData.preferredDate} onChange={(e) => setFormData({...formData, preferredDate: e.target.value})} />
                      <input disabled={formStatus === 'submitting'} type="time" step="900" className="w-full bg-[#FDFBF7] border-b border-[#A05035]/20 p-4 text-xs focus:outline-none focus:border-[#A05035] transition-all disabled:opacity-50" value={formData.preferredTime} onChange={(e) => setFormData({...formData, preferredTime: e.target.value})} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input disabled={formStatus === 'submitting'} type="tel" placeholder="Phone" className="w-full bg-[#FDFBF7] border-b border-[#A05035]/20 p-4 text-sm focus:outline-none focus:border-[#A05035] transition-all disabled:opacity-50" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                      <select disabled={formStatus === 'submitting'} className="w-full bg-[#FDFBF7] border-b border-[#A05035]/20 p-4 text-sm focus:outline-none focus:border-[#A05035] transition-all disabled:opacity-50" value={formData.guests} onChange={(e) => setFormData({...formData, guests: e.target.value})}><option value="1">1 Guest</option><option value="2">2 Guests</option><option value="3">3 Guests</option></select>
                    </div>
                    <button type="submit" disabled={formStatus === 'submitting'} className="w-full py-5 bg-[#A05035] text-white text-[11px] font-bold tracking-[0.4em] uppercase shadow-xl transition-all active:scale-95 mt-6 flex items-center justify-center gap-3 disabled:bg-[#A05035]/70">{formStatus === 'submitting' ? <><Loader2 className="animate-spin" size={16} /> PROCESSING...</> : 'REGISTER FOR EVENT'}</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
