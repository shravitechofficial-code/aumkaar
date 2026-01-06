
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, FALLBACK_IMAGE } from '../constants';
import { ArrowRight, Star, Activity, Brain, Zap, Check } from 'lucide-react';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeScrollIndex, setActiveScrollIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (target.src !== FALLBACK_IMAGE) {
      target.src = FALLBACK_IMAGE;
    }
  };

  const handleGalleryScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.offsetWidth * 0.8; // Approximate based on responsive widths
    const newIndex = Math.round(scrollPosition / (container.scrollWidth / SERVICES.length));
    setActiveScrollIndex(newIndex);
  };

  const scrollToOffer = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = (container.scrollWidth / SERVICES.length) * index;
    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#3E2723]">
        
        {/* YouTube Video Background Container */}
        <div 
          className="absolute inset-0 z-0 overflow-hidden transition-transform duration-300 ease-out"
          style={{ 
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <div className="absolute inset-0 w-full h-full scale-125 md:scale-110 xl:scale-105">
            <iframe
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              src="https://www.youtube.com/embed/8EO899rusyo?autoplay=1&mute=1&loop=1&playlist=8EO899rusyo&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&enablejsapi=1"
              title="Aumkaar Hero Background"
              frameBorder="0"
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#3E2723]/80 z-10"></div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 xl:px-24 w-full relative z-20 py-32 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block mb-10 animate-fade-in">
              <span className="text-[#FDFBF7] text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase py-2 border-b border-[#FDFBF7]/30">
                Welcome to Aumkaar
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] font-serif font-medium text-[#FDFBF7] leading-[1.1] md:leading-[1] mb-12 drop-shadow-2xl">
              Find Your Balance. <br className="hidden md:block" />
              Nourish Your <span className="font-serif-italic">Soul.</span>
            </h1>
            
            <p className="text-[#FDFBF7] opacity-90 text-lg md:text-xl lg:text-2xl xl:text-3xl font-light leading-relaxed max-w-2xl mx-auto mb-16 drop-shadow-lg px-4 md:px-0">
              Rediscover the ancient wisdom of sound. A sanctuary where vibration shifts inner states and restores your natural harmony.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-10 justify-center items-center">
              <Link to="/contact" className="w-full sm:w-auto px-12 md:px-16 py-6 bg-[#A05035] text-[#FDFBF7] font-bold tracking-[0.5em] text-[11px] hover:bg-[#FDFBF7] hover:text-[#A05035] transition-all duration-500 shadow-2xl uppercase">
                JOIN SESSIONS
              </Link>
              <Link to="/services" className="w-full sm:w-auto px-12 md:px-16 py-6 border border-[#FDFBF7]/40 text-[#FDFBF7] font-bold tracking-[0.5em] text-[11px] hover:bg-[#FDFBF7]/15 transition-all duration-500 backdrop-blur-md uppercase">
                OUR OFFERINGS
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-50">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#FDFBF7]"></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-32 lg:py-40 xl:py-48 bg-[#FDFBF7]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 xl:gap-32 items-center">
            <div className="lg:w-1/2 text-center lg:text-left">
               <span className="text-[#A05035] font-bold tracking-[0.4em] text-xs uppercase mb-8 block">Our Philosophy</span>
               <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-serif font-medium text-[#A05035] mb-12 leading-tight">
                 Where Wellness Meets <br/>
                 <span className="font-serif-italic text-[#3E2723]">Inner Peace</span>
               </h2>
               <div className="space-y-6 md:space-y-8 text-[#3E2723] text-lg md:text-xl lg:text-2xl font-light leading-relaxed opacity-85">
                 <p>Everything in the universe is vibration, including the human body. Every organ, bone, and cell has its own natural frequency.</p>
                 <p>Because the body is made of 70% water, vibrations travel easily through tissues, creating a soothing internal massage.</p>
               </div>
               <div className="mt-16">
                 <Link to="/about" className="text-[#A05035] font-bold tracking-[0.3em] text-xs uppercase border-b-2 border-[#A05035]/20 pb-2 hover:border-[#A05035] transition-all">
                    DISCOVER OUR ROOTS
                 </Link>
               </div>
            </div>
            <div className="lg:w-1/2 relative w-full px-4 md:px-12 lg:px-0">
               <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden shadow-2xl bg-[#F4EFE6] border border-[#A05035]/10 p-4">
                 <div className="w-full h-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=2070&auto=format&fit=crop" 
                      alt="Sound Healing Experience" 
                      className="w-full h-full object-cover transition-all duration-1000"
                      onError={handleImageError}
                    />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Metrics Section */}
      <section className="py-20 md:py-32 bg-[#FDFBF7] border-y border-[#A05035]/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center">
            <div>
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#3E2723] mb-4">1500+</h3>
              <span className="text-[#A05035] font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase">Healing Sessions</span>
            </div>
            <div className="relative">
              {/* Vertical Dividers for Desktop */}
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-[#A05035]/10"></div>
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#3E2723] mb-4">12+</h3>
              <span className="text-[#A05035] font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase">Years of Experience</span>
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-[#A05035]/10"></div>
            </div>
            <div>
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#3E2723] mb-4">20K+</h3>
              <span className="text-[#A05035] font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase">Session Attendees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanisms Grid */}
      <section className="py-24 md:py-32 lg:py-40 bg-[#F4EFE6]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16 md:mb-24 px-4">
            <span className="text-[#A05035] font-bold tracking-[0.4em] text-xs uppercase block mb-6">The Science</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-[#3E2723]">How Sound Healing Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 xl:gap-20">
            {[
              { title: "Resonance", icon: <Activity size={32} />, desc: "Restoring healthy vibration in the body by matching natural frequencies of your internal systems." },
              { title: "Entrainment", icon: <Brain size={32} />, desc: "Shifting brainwaves from Beta to Theta deep meditation through rhythmic auditory stimuli." },
              { title: "Cymatics", icon: <Zap size={32} />, desc: "Using vibrational waves to physically manipulate energy patterns and release stored trauma." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FDFBF7] p-10 md:p-12 lg:p-16 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group border border-[#A05035]/10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#A05035] text-[#FDFBF7] flex items-center justify-center mx-auto mb-10 md:mb-12 group-hover:bg-[#3E2723] transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-[#A05035] mb-6">{item.title}</h3>
                <p className="text-[#3E2723] opacity-75 font-light leading-relaxed text-base md:text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Layout */}
      <section className="py-24 md:py-32 lg:py-40 xl:py-52 bg-[#FDFBF7]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
           <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 xl:gap-32">
              <div className="lg:w-1/2 text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-[#A05035] mb-10 leading-tight">Reconnect. Restore. <span className="font-serif-italic text-[#3E2723]">Renew.</span></h2>
                <p className="text-[#3E2723] opacity-80 font-light mb-12 text-lg md:text-xl lg:text-2xl leading-relaxed">The journey begins with a single breath. Our sessions are designed to bypass the analytical mind.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-16">
                   {[
                     'Soothe chronic tension', 'Reset cortisol balance', 'Optimize heart rhythm',
                     'Access deep Theta states', 'Unlock restorative rest', 'Cultivate mental clarity'
                   ].map((item, i) => (
                     <div key={i} className="flex items-center justify-start text-[#3E2723] font-light text-base md:text-lg lg:text-xl opacity-90 group cursor-default">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-[#A05035] flex items-center justify-center mr-4 md:mr-6 shrink-0 text-[#FDFBF7] shadow-lg">
                          <Check size={16} />
                        </div>
                        {item}
                     </div>
                   ))}
                </div>
                <Link to="/contact" className="px-12 md:px-16 py-6 bg-[#3E2723] text-[#FDFBF7] font-bold tracking-[0.4em] text-[11px] rounded-none hover:bg-[#A05035] transition-all inline-block shadow-2xl">
                  SCHEDULE A SESSION
                </Link>
              </div>
              <div className="lg:w-1/2 relative w-full px-4 md:px-12 lg:px-0">
                 <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#F4EFE6] shadow-2xl border border-[#A05035]/10 p-3">
                   <div className="w-full h-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1590117769185-1d6eb750058e?q=80&w=2070&auto=format&fit=crop" 
                      alt="Restorative Sound Work" 
                      className="w-full h-full object-cover opacity-95 transition-transform duration-1000 hover:scale-105"
                      onError={handleImageError}
                    />
                   </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Offerings Horizontal Scroll Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-[#FDFBF7] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-10 md:gap-0">
            <div className="w-full text-center md:text-left">
              <span className="text-[#A05035] font-bold tracking-[0.4em] text-xs uppercase block mb-6">Explore the Naad</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-[#3E2723]">Curated Offerings</h2>
            </div>
            <div className="w-full flex justify-center md:justify-end">
              <Link to="/services" className="px-10 md:px-14 py-4 md:py-5 border border-[#3E2723] text-[#3E2723] text-[11px] font-bold tracking-[0.4em] rounded-none hover:bg-[#A05035] hover:border-[#A05035] hover:text-[#FDFBF7] transition-all duration-300">
                BROWSE ALL SESSIONS
              </Link>
            </div>
          </div>
        </div>

        {/* Scrollable Gallery */}
        <div className="relative group">
          <div 
            ref={scrollContainerRef}
            onScroll={handleGalleryScroll}
            className="flex overflow-x-auto gap-8 md:gap-12 lg:gap-16 px-6 md:px-12 lg:px-20 xl:px-24 pb-16 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {SERVICES.map((service) => (
              <div key={service.id} className="snap-start shrink-0 w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] max-w-[450px]">
                <Link to={`/service/${service.id}`} className="group/card block">
                  <div className="relative aspect-[3/4] overflow-hidden mb-10 bg-[#F4EFE6] shadow-xl border border-[#A05035]/10 transform transition-all duration-700 group-hover/card:-translate-y-4">
                     <img 
                       src={service.image} 
                       alt={service.title} 
                       className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110 opacity-95 group-hover/card:opacity-100"
                       onError={handleImageError}
                     />
                     <div className="absolute inset-0 bg-[#3E2723]/10 group-hover/card:bg-transparent transition-colors duration-500"></div>
                     <div className="absolute bottom-8 right-8 w-12 h-12 bg-[#FDFBF7] flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all transform translate-y-10 group-hover/card:translate-y-0 shadow-2xl">
                       <ArrowRight className="text-[#A05035]" size={24} />
                     </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#3E2723] mb-5 group-hover/card:text-[#A05035] transition-colors">{service.title}</h3>
                  <p className="text-[#3E2723] opacity-75 text-base md:text-lg line-clamp-2 font-light leading-relaxed">{service.shortDescription}</p>
                </Link>
              </div>
            ))}
          </div>

          {/* Dot Pagination */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {SERVICES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToOffer(idx)}
                className={`transition-all duration-500 rounded-full ${
                  activeScrollIndex === idx 
                  ? 'w-8 h-1.5 bg-[#A05035]' 
                  : 'w-2 h-2 bg-[#3E2723]/20 hover:bg-[#A05035]/40'
                }`}
                aria-label={`Go to offering ${idx + 1}`}
              />
            ))}
          </div>

          {/* Hint for more scrolling (visible on large screens) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-full bg-gradient-to-l from-[#FDFBF7] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 lg:py-40 xl:py-52 bg-[#F4EFE6]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
           <span className="text-[#A05035] font-bold tracking-[0.5em] text-xs uppercase block mb-12">Echoes of Balance</span>
           <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-[#3E2723] mb-16 md:mb-24 lg:mb-32 px-4 leading-tight">The Resonance Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 lg:gap-20">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-[#FDFBF7] p-10 md:p-12 lg:p-16 xl:p-20 shadow-xl border border-[#A05035]/10 group hover:bg-[#FDFBF7]/60 transition-colors">
                <div className="flex justify-center text-[#A05035] mb-8 md:mb-12 group-hover:scale-110 transition-transform">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" className="mx-1" />)}
                </div>
                <p className="text-[#3E2723] font-light italic mb-10 md:mb-16 leading-loose text-xl md:text-2xl lg:text-3xl opacity-90">"{t.text}"</p>
                <div className="pt-8 md:pt-10 border-t border-[#A05035]/20">
                  <h4 className="font-bold text-[#A05035] text-sm md:text-base lg:text-lg uppercase tracking-[0.4em]">{t.name}</h4>
                  <span className="text-xs md:text-sm text-[#3E2723] opacity-40 uppercase tracking-widest mt-2 block">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Home;
