
import React, { useState, useEffect } from 'react';
import { ChevronDown, Youtube, ArrowUpRight, X, BookOpen } from 'lucide-react';
import { FALLBACK_IMAGE } from '../constants';
import { LOGOS } from '../assets/logos';

const About: React.FC = () => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (target.src !== FALLBACK_IMAGE) {
      target.src = FALLBACK_IMAGE;
    }
  };

  const toggleMember = (id: string) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  const featuredVideos = [
    { id: '8EO899rusyo', title: 'Tibetan Sound Spa Experience' },
    { id: '5S-089781', title: 'Mind Management Intro' },
    { id: '3F-981722', title: 'Tai Chi Morning Flow' }
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      
      {/* 1. Header Section */}
      <section className="pt-48 md:pt-64 pb-20 md:pb-32 bg-[#3E2723] text-center relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <img src={LOGOS.SYMBOL} alt="Sacred Seal" className="h-24 mx-auto mb-10 opacity-40 mix-blend-screen" />
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
                <p>We saw people everywhere struggling with overthinking, stress, tension and anxiety.. not because they were incapable, but because modern life rarely allows the mind and nervous system to truly rest. The constant speed, noise and pressure pull us away from our natural state of balance.</p>
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
                <p>We believe stress-free living is not a luxury; it is a practice. Anyone can learn simple, sustainable tools to live with less pressure, less tension and more clarity.</p>
                <p className="text-2xl font-serif text-[#A05035] pt-8">Aumkaar offers the space, the science and the guidance to bring you back to yourself.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Intro Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <span className="text-[#A05035] font-bold tracking-[0.5em] text-[10px] uppercase block mb-6">Who we are</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#3E2723] mb-12">That <span className="font-serif-italic">Meditation</span> Couple</h2>
          <div className="max-w-3xl mx-auto space-y-8 text-xl md:text-2xl font-normal leading-relaxed text-[#3E2723]">
            <p>That Meditation Couple is the coming together of <strong>Gyandeep and Karan</strong>.. two practitioners who blend sound healing, mind science and mindful movement into a single, unified experience.</p>
            <p className="italic text-[#A05035]">What makes them unique is not just their skillset, but their <strong>energy as a duo</strong>: one grounded in deep meditation and sound therapy, the other rooted in mind management, psychology and conscious living.</p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 md:py-32 bg-[#FDFBF7] border-y border-[#A05035]/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center">
            <div>
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#3E2723] mb-4">1500+</h3>
              <span className="text-[#A05035] font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase">Healing Sessions</span>
            </div>
            <div className="relative">
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

      {/* 3. Bios */}
      <section className="bg-[#F4EFE6] py-24 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="space-y-32 md:space-y-48">
            {/* Gyandeep */}
            <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-24">
              <div className="w-full md:w-[40%] aspect-[3/4] overflow-hidden shadow-2xl bg-[#3E2723] border border-[#A05035]/10 sticky top-32">
                <img 
                  src="https://i.ibb.co/KzVG78yh/Copy-of-IMG-0563.jpg" 
                  alt="Gyandeep" 
                  className="w-full h-full object-cover transition-all duration-1000"
                  onError={handleImageError}
                />
              </div>
              <div className="w-full md:w-[60%] space-y-8">
                <div>
                  <span className="text-[#A05035] font-bold tracking-[0.5em] text-[10px] uppercase block mb-4">Meditation Practitioner • Sound Healer</span>
                  <h3 className="text-3xl md:text-5xl font-serif text-[#3E2723]">About Gyandeep</h3>
                </div>
                <div className="space-y-6 text-lg md:text-xl font-normal leading-relaxed text-[#3E2723]">
                  <p>Gyandeep’s spiritual journey began at the age of 18, and since 2013 she has been training in meditation under the direct guidance of <strong>Sadguru Ramesh ji</strong>.</p>
                  <div className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedMember === 'gyandeep' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="space-y-6 pt-6">
                      <p>With more than <strong>10 years of experience</strong> guiding people through meditation and inner transformation, Gyandeep now integrates her knowledge of awareness, breath and vibrational therapy to create sessions that are both grounding and gently transformative.</p>
                      <p>At Aumkaar, Gyandeep’s work blends meditative wisdom with the <strong>science of vibration and brainwave regulation</strong>, offering a healing experience that is minimal, modern and profoundly soothing.</p>
                    </div>
                  </div>
                  <button onClick={() => toggleMember('gyandeep')} className="group flex items-center gap-4 text-[#A05035] font-bold tracking-[0.4em] text-[10px] uppercase pt-4">
                    <span>{expandedMember === 'gyandeep' ? 'READ LESS' : 'READ FULL BIO'}</span>
                    <ChevronDown className={`transition-transform duration-500 group-hover:translate-y-1 ${expandedMember === 'gyandeep' ? 'rotate-180' : ''}`} size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Karan */}
            <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-24">
              <div className="w-full md:w-[40%] aspect-[3/4] overflow-hidden shadow-2xl bg-[#3E2723] border border-[#A05035]/10 sticky top-32">
                <img 
                  src="https://i.ibb.co/210FJyPb/Copy-of-IMG-0536.jpg" 
                  alt="Karan" 
                  className="w-full h-full object-cover transition-all duration-1000"
                  onError={handleImageError}
                />
              </div>
              <div className="w-full md:w-[60%] space-y-8">
                <div>
                  <span className="text-[#A05035] font-bold tracking-[0.5em] text-[10px] uppercase block mb-4">Mindset Coach • Mind Management Specialist</span>
                  <h3 className="text-3xl md:text-5xl font-serif text-[#3E2723]">About Karan</h3>
                </div>
                <div className="space-y-6 text-lg md:text-xl font-normal leading-relaxed text-[#3E2723]">
                  <p>Karan’s journey into inner mastery began in <strong>2016</strong>, when he committed himself to understanding how the mind shapes our thoughts, actions and reality.</p>
                  <div className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedMember === 'karan' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="space-y-6 pt-6">
                      <p>Karan believes that most people are not limited by their potential, but by the invisible patterns of the mind and with the right tools, anyone can unlock a higher version of themselves.</p>
                      <p>At Aumkaar, Karan integrates <strong>Mind Management</strong>, subconscious work and state-shifting practices to help people clear mental clutter.</p>
                    </div>
                  </div>
                  <button onClick={() => toggleMember('karan')} className="group flex items-center gap-4 text-[#A05035] font-bold tracking-[0.4em] text-[10px] uppercase pt-4">
                    <span>{expandedMember === 'karan' ? 'READ LESS' : 'READ FULL BIO'}</span>
                    <ChevronDown className={`transition-transform duration-500 group-hover:translate-y-1 ${expandedMember === 'karan' ? 'rotate-180' : ''}`} size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. YouTube Feed */}
      <section className="py-24 md:py-32 lg:py-40 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#A05035] font-bold tracking-[0.5em] text-[10px] uppercase block mb-6">Our Digital Sanctuary</span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#3E2723] leading-tight mb-8">
                Follow our journey on <br/><span className="font-serif-italic">YouTube</span>
              </h2>
            </div>
            <a href="https://www.youtube.com/@thatmeditationcouple" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-[#3E2723] text-[#FDFBF7] px-8 py-5 text-[10px] font-bold tracking-[0.4em] uppercase transition-all hover:bg-[#A05035] shadow-xl">
              <Youtube size={18} />
              <span>SUBSCRIBE</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {featuredVideos.map((video, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-video mb-6 overflow-hidden bg-[#3E2723] shadow-lg border border-[#A05035]/5">
                  <iframe className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity" src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&rel=0`} title={video.title} frameBorder="0" allowFullScreen></iframe>
                </div>
                <h4 className="text-lg font-serif text-[#3E2723] group-hover:text-[#A05035] transition-colors">{video.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
