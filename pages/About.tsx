
import React, { useState, useEffect } from 'react';
import { X, BookOpen, Heart, Shield, Wind } from 'lucide-react';
import { FALLBACK_IMAGE } from '../constants';
import { LOGOS } from '../assets/logos';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

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
    <div className="bg-[#FDFBF7] min-h-screen">
      
      {/* 1. Header Section */}
      <section className="pt-48 md:pt-64 pb-20 md:pb-32 bg-[#3E2723] text-center relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <img src={LOGOS.SYMBOL_LIGHT} alt="Sacred Seal" className="h-24 mx-auto mb-10 opacity-60" />
          <span className="text-[#FDFBF7]/60 font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase block mb-8">Our Roots</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#FDFBF7] mb-10 leading-tight">The Sacred <span className="font-serif-italic">Origin</span></h1>
          <p className="text-[#FDFBF7]/80 font-light max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed italic mb-12">
            "A peaceful state is the most powerful state. Yet today, peace has quietly become a luxury."
          </p>
          <button 
            onClick={() => setIsStoryModalOpen(true)}
            className="group flex items-center gap-4 bg-[#A05035] text-[#FDFBF7] px-10 py-5 text-[10px] font-bold tracking-[0.4em] uppercase transition-all hover:bg-[#FDFBF7] hover:text-[#A05035] mx-auto shadow-2xl"
          >
            <BookOpen size={16} />
            <span>Read Full Story</span>
          </button>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#A05035]/10 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* Story Modal */}
      {isStoryModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-[#3E2723]/95 backdrop-blur-md" onClick={() => setIsStoryModalOpen(false)}></div>
          <div className="relative bg-[#FDFBF7] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-[#A05035]/20 animate-fade-in">
            <button 
              onClick={() => setIsStoryModalOpen(false)}
              className="sticky top-6 left-[calc(100%-4rem)] z-20 p-2 bg-[#A05035] text-white hover:bg-[#3E2723] transition-colors shadow-lg"
            >
              <X size={24} />
            </button>
            
            <div className="p-10 md:p-20 pt-4 md:pt-4">
              <img src={LOGOS.SYMBOL} alt="Aumkaar Symbol" className="h-14 mb-8 opacity-20" />
              <span className="text-[#A05035] font-bold tracking-[0.5em] text-[10px] uppercase block mb-6">Chronicles</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#3E2723] mb-12 border-b border-[#A05035]/10 pb-8">The Story of Aumkaar</h2>
              
              <div className="space-y-8 text-lg md:text-xl font-normal leading-relaxed text-[#3E2723]">
                <p className="text-2xl italic font-serif text-[#A05035]">A peaceful state is the most powerful state. Yet today, peace has quietly become a luxury.</p>
                <p>We saw people everywhere struggling with overthinking, stress, tension and anxiety... not because they were incapable, but because modern life rarely allows the mind and nervous system to truly rest. The constant speed, noise and pressure pull us away from our natural state of balance.</p>
                <p>Through our own spiritual journey, under the guidance of our Guru, we experienced something different, a <strong>peaceful, aware mind filled with clarity and quiet bliss</strong>. A state where the mind supports life instead of fighting it.</p>
                <p>There came a point where this understanding could no longer remain personal. It arose as an inner urge to share what we had received. <strong>That is how Aumkaar was created.</strong></p>
                <p>Aumkaar takes its name from the primordial sound <strong>AUM</strong>, the vibration believed to be the seed of creation. Modern science echoes the same truth: everything in the universe is movement and frequency. Every cell, every emotion, every thought exists in vibration.</p>
                <p>Rooted in spiritual depth yet designed for modern living, our approach brings together therapeutic sound, breath, mind training and mindful movement to help people recalibrate in a world overflowing with overstimulation.</p>
                <div className="py-8 border-y border-[#A05035]/10 my-10 space-y-4">
                  <p><strong>Sound Healing</strong> gently guides the nervous system into rest.</p>
                  <p><strong>Mind Management</strong> brings clarity, emotional regulation and focus.</p>
                  <p><strong>Tai Chi</strong> reconnects us with the body through slow, meditative movement.</p>
                </div>
                <p>These are not separate practices, but complementary tools with one shared purpose, to help the mind quieten, the body release tension, and awareness return.</p>
                <p>Aumkaar is not just a wellness space. It is a return to your natural vibration, the calm, coherent state your body and mind were designed for.</p>
                <p>We believe stress-free living is not a luxury; it is a practice. Anyone can learn simple, sustainable tools to live with less pressure, less friction, and more presence.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Team Section - Gyandeep */}
      <section className="py-24 md:py-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-32">
            <div className="w-full md:w-1/2 md:sticky md:top-32 h-fit z-0">
              <div className="relative aspect-[4/5] bg-[#F4EFE6] shadow-2xl overflow-hidden border border-[#A05035]/10">
                <img 
                  src="https://i.ibb.co/KzVG78yh/Copy-of-IMG-0563.jpg" 
                  alt="Gyandeep" 
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-10 relative z-10 bg-[#FDFBF7] md:bg-transparent">
              <div>
                <span className="text-[#A05035] font-bold tracking-[0.5em] text-[10px] uppercase block mb-4">Founder</span>
                <h2 className="text-4xl md:text-6xl font-serif text-[#3E2723] mb-4">Gyandeep</h2>
                <p className="text-[#A05035] font-bold tracking-[0.2em] text-[11px] uppercase">Sound Healer • Meditation Practitioner</p>
              </div>
              <div className="space-y-6 text-xl text-[#3E2723] font-light leading-relaxed">
                <p>Gyandeep’s spiritual journey began at the age of 18, and since 2013 she has been training in meditation under the direct guidance of Sadguru Ramesh ji.</p>
                <p>Her path into the healing arts was paved by a deep curiosity about the subtle dimensions of human existence. Over the years, she has mastered the intricate science of Tibetan Sound Healing, learning how frequencies interact with the nervous system to release stored trauma and emotional blockages.</p>
                <p>Gyandeep believes that sound is the most direct bridge to stillness. In her sessions, she creates a sanctuary of vibration where the thinking mind can finally surrender, allowing the body's innate wisdom to take over and restore harmony.</p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-10 border-t border-[#A05035]/10">
                <div className="space-y-2">
                  <Heart className="text-[#A05035]" size={20} />
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[#3E2723]/60">Expertise</span>
                  <p className="text-sm font-medium">Tibetan Sound Healing</p>
                </div>
                <div className="space-y-2">
                  <Wind className="text-[#A05035]" size={20} />
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[#3E2723]/60">Practice</span>
                  <p className="text-sm font-medium">Spiritual Meditation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Team Section - Karan */}
      <section className="py-24 md:py-40 bg-[#F4EFE6]/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-16 lg:gap-32">
            <div className="w-full md:w-1/2 md:sticky md:top-32 h-fit z-0">
              <div className="relative aspect-[4/5] bg-[#F4EFE6] shadow-2xl overflow-hidden border border-[#A05035]/10">
                <img 
                  src="https://i.ibb.co/210FJyPb/Copy-of-IMG-0536.jpg" 
                  alt="Karan" 
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-10 relative z-10">
              <div>
                <span className="text-[#A05035] font-bold tracking-[0.5em] text-[10px] uppercase block mb-4">Founder</span>
                <h2 className="text-4xl md:text-6xl font-serif text-[#3E2723] mb-4">Karan</h2>
                <p className="text-[#A05035] font-bold tracking-[0.2em] text-[11px] uppercase">Mindset Coach • Mind Management Specialist</p>
              </div>
              <div className="space-y-6 text-xl text-[#3E2723] font-light leading-relaxed">
                <p>Karan’s journey into inner mastery began in 2016, focusing on how the mind shapes our thoughts, reality, and emotional baseline.</p>
                <p>With a background that bridges practical psychology and ancient meditative practices, Karan specializes in "Mind Management"—a system designed to help individuals clear mental clutter and regulate their internal states.</p>
                <p>His approach is both pragmatic and profound. He provides the tools necessary to navigate high-pressure environments without losing one's center, helping clients transform the way they interact with their own thoughts and the world around them.</p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-10 border-t border-[#A05035]/10">
                <div className="space-y-2">
                  <Shield className="text-[#A05035]" size={20} />
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[#3E2723]/60">Focus</span>
                  <p className="text-sm font-medium">Mind Management</p>
                </div>
                <div className="space-y-2">
                  <BookOpen className="text-[#A05035]" size={20} />
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[#3E2723]/60">Background</span>
                  <p className="text-sm font-medium">Cognitive Conditioning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-32 md:py-56 bg-texture text-[#FDFBF7] text-center">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-4xl md:text-7xl font-serif mb-12">Experience the <span className="font-serif-italic">Aumkaar</span> Resonance</h2>
          <p className="text-lg md:text-2xl font-light opacity-80 max-w-2xl mx-auto mb-16">
            Join us in our sanctuary or invite us to your space. Let us rediscover the peace that already resides within you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/services" className="px-12 py-6 bg-[#A05035] text-white text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-white hover:text-[#A05035] transition-all shadow-2xl text-center">
              Our Offerings
            </Link>
            <Link to="/contact" className="px-12 py-6 border border-white/20 text-white text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-white hover:text-[#3E2723] transition-all text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
