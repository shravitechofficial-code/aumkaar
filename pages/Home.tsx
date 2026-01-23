
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';
import { ArrowRight, Star, Youtube, Instagram, Loader2, ChevronLeft, ChevronRight, Gift, CheckCircle2, Waves, Activity, Zap, Play } from 'lucide-react';
import { dataService } from '../services/dataService';
import { submitForm } from '../services/submissionService';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeScrollIndex, setActiveScrollIndex] = useState(0);
  const [activeYoutubeIndex, setActiveYoutubeIndex] = useState(0);
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [activeVideoTestimonialIndex, setActiveVideoTestimonialIndex] = useState(0);
  
  const [isSubmittingFreebie, setIsSubmittingFreebie] = useState(false);
  const [freebieSuccess, setFreebieSuccess] = useState(false);
  const [freebieData, setFreebieData] = useState({ name: '', email: '', phone: '' });

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const youtubeContainerRef = useRef<HTMLDivElement>(null);
  const reelsContainerRef = useRef<HTMLDivElement>(null);
  const testimonialsContainerRef = useRef<HTMLDivElement>(null);
  const videoTestimonialsContainerRef = useRef<HTMLDivElement>(null);

  const youtubeVideos = dataService.getYoutubeLinks();
  const instagramReels = dataService.getReels();
  const videoTestimonials = dataService.getVideoTestimonials();
  const services = dataService.getServices();
  const blogs = dataService.getBlogs();
  const downloadLink = dataService.getFreebieLink();

  // The specific background video ID requested
  const HERO_VIDEO_ID = '8EO899rusyo';

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTracking = (ref: React.RefObject<HTMLDivElement | null>, setter: (index: number) => void, itemCount: number) => {
    if (!ref.current) return;
    const container = ref.current;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.scrollWidth / itemCount;
    const newIndex = Math.round(scrollPosition / itemWidth);
    setter(newIndex);
  };

  const scrollToItem = (ref: React.RefObject<HTMLDivElement | null>, index: number, itemCount: number) => {
    if (!ref.current) return;
    const container = ref.current;
    const scrollAmount = (container.scrollWidth / itemCount) * index;
    container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleArrowClick = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right', activeIndex: number, setter: (idx: number) => void, itemCount: number) => {
    const nextIndex = direction === 'left' 
      ? Math.max(0, activeIndex - 1) 
      : Math.min(itemCount - 1, activeIndex + 1);
    scrollToItem(ref, nextIndex, itemCount);
  };

  const handleFreebieSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingFreebie(true);
    const success = await submitForm({
      timestamp: new Date().toISOString(),
      formType: 'Lead Magnet',
      name: freebieData.name,
      email: freebieData.email,
      phone: freebieData.phone,
      service: 'Morning Resonance Audio Gift',
      message: 'Source: Homepage Section (Above Footer)',
      pageUrl: window.location.href
    });
    if (success) {
      setFreebieSuccess(true);
      localStorage.setItem('aumkaar_lead_captured', 'true');
    } else {
      alert('Problem sending request. Please try again.');
    }
    setIsSubmittingFreebie(false);
  };

  // Filter for 1:1 Healing services (Tibetan, Chakra, Couples)
  const healingServices = services.filter(s => 
    ['tibetan-sound-spa', 'chakra-sound-balancing', 'couples-sound-therapy'].includes(s.id)
  );

  // Filter for Group sessions (Exclude the 1:1 specific services)
  const groupSessions = services.filter(s => 
    !['tibetan-sound-spa', 'chakra-sound-balancing', 'couples-sound-therapy'].includes(s.id)
  );

  const getYoutubeId = (url: string) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : url;
  };

  const getInstagramId = (url: string) => {
    if (!url) return '';
    const match = url.match(/(?:reel|reels|p)\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : url;
  };

  const contentWrapper = "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 xl:px-24";

  return (
    <div className="w-full bg-[#FDFBF7]">
      {/* Rebuilt Hero Section - Fixed Video Visibility & Unified Typography */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 w-full h-full scale-110">
            <iframe
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
              src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&enablejsapi=1`}
              title="Aumkaar Hero Background"
              frameBorder="0"
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>
        </div>
        
        {/* Backdrop for text legibility */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[3px] z-10"></div>
        
        {/* Gradient for bottom grounding */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 z-10"></div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 xl:px-24 w-full relative z-20 py-32 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="text-[#FDFBF7]/90 font-bold tracking-[0.5em] text-[10px] sm:text-xs uppercase block mb-8 drop-shadow-xl animate-reveal">
              welcome to Aumkaar
            </span>
            
            <h1 className="font-serif font-medium tracking-normal text-[#FDFBF7] leading-[1.15] md:leading-[1.1] mb-12 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] animate-reveal delay-300">
                One stop solution to
              </span>
              <span className="font-serif-italic italic text-[#FDFBF7] block text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] mt-4 md:mt-6 opacity-100 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] animate-reveal delay-500">
                Stress, Sleep disorder and Anxiety
              </span>
            </h1>

            <p className="text-[#FDFBF7] text-xl md:text-2xl lg:text-3xl xl:text-[40px] font-semibold leading-relaxed max-w-4xl mx-auto mb-16 drop-shadow-lg italic animate-reveal delay-700">
              Where sound becomes medicine and silence becomes home.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 lg:gap-10 justify-center items-center animate-reveal delay-700">
              <Link 
                to="/contact" 
                style={{ backgroundColor: '#683422' }}
                className="w-full sm:w-auto px-12 md:px-16 py-6 text-[#FDFBF7] font-bold tracking-[0.5em] text-[11px] hover:text-white transition-all duration-500 shadow-2xl uppercase btn-texture text-center"
              >
                JOIN SESSIONS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Sound Healing Helps - Scientific Narrative Section */}
      <section className="py-24 md:py-32 lg:py-48 bg-[#FDFBF7] relative overflow-hidden">
        <div className={contentWrapper}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-32">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-[#A05035] font-bold tracking-[0.5em] text-xs uppercase block">The Science of Vibration</span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#3E2723] leading-tight">How Sound Healing <br/><span className="font-serif-italic text-[#A05035]">Helps</span></h2>
              </div>
              <div className="space-y-8 text-[#3E2723] text-lg md:text-xl lg:text-2xl font-normal leading-relaxed">
                <p>
                  At the microscopic level, everything in the universe is vibration, including the human body. Every organ, bone and cell has its own natural frequency. When stress, poor sleep, emotional tension or lifestyle imbalance disrupt these frequencies, the body falls out of harmony.
                </p>
                <p className="border-l-2 border-[#A05035]/20 pl-8 py-2 font-medium">
                  Because the body is made of 70% water, and water conducts sound four times faster than air, vibrations from singing bowls travel easily through tissues, muscles and fluids, creating a soothing internal massage without physical touch. 
                </p>
                <p>
                  These vibrations help release tension, slow the mind, and guide the body back toward balance.
                </p>
              </div>
            </div>
            
            <div className="relative pt-12">
              <div className="aspect-[4/5] bg-[#F4EFE6] rounded-sm flex items-center justify-center p-12 relative overflow-hidden group shadow-2xl border border-[#A05035]/10">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
                <div className="relative z-10 text-center space-y-10">
                   <div className="w-20 h-20 mx-auto bg-[#FDFBF7] rounded-full flex items-center justify-center shadow-inner">
                      <Waves size={32} className="text-[#A05035]" />
                   </div>
                   <p className="font-serif-italic text-2xl md:text-3xl lg:text-4xl text-[#3E2723] italic leading-relaxed px-4 font-semibold">
                     "Sound healing is not magic, it is physics, biology and neuroscience coming together."
                   </p>
                   <div className="flex justify-center gap-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-[#A05035]/30"></div>
                      ))}
                   </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-[#A05035]/10 rounded-full animate-[ping_3s_infinite] opacity-20"></div>
              </div>
            </div>
          </div>

          <div className="space-y-20">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h3 className="text-2xl md:text-4xl font-serif text-[#3E2723] font-bold">Three primary mechanisms explain its impact:</h3>
              <div className="w-24 h-px bg-[#A05035] mx-auto opacity-40"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
              {/* Resonance Mechanism */}
              <div className="group text-center space-y-8 p-8 transition-all hover:bg-white hover:shadow-xl rounded-2xl border border-transparent hover:border-[#A05035]/5">
                <div className="w-24 h-24 bg-[#F4EFE6] rounded-2xl flex items-center justify-center mx-auto text-[#A05035] shadow-sm transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                  <Waves size={40} strokeWidth={1.5} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl lg:text-3xl font-serif text-[#3E2723] font-bold">Resonance</h4>
                  <p className="text-[#3E2723] opacity-90 font-normal leading-relaxed text-lg">
                    Just like one guitar string can cause another to vibrate, sound encourages the body to match a calmer, healthier rhythm.
                  </p>
                </div>
              </div>

              {/* Entrainment Mechanism */}
              <div className="group text-center space-y-8 p-8 transition-all hover:bg-white hover:shadow-xl rounded-2xl border border-transparent hover:border-[#A05035]/5">
                <div className="w-24 h-24 bg-[#F4EFE6] rounded-2xl flex items-center justify-center mx-auto text-[#A05035] shadow-sm transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110">
                  <Activity size={40} strokeWidth={1.5} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl lg:text-3xl font-serif text-[#3E2723] font-bold">Entrainment</h4>
                  <p className="text-[#3E2723] opacity-90 font-normal leading-relaxed text-lg">
                    Sound softly leads the nervous system into parasympathetic “rest-and-repair” mode.
                  </p>
                </div>
              </div>

              {/* Cymatics Mechanism */}
              <div className="group text-center space-y-8 p-8 transition-all hover:bg-white hover:shadow-xl rounded-2xl border border-transparent hover:border-[#A05035]/5">
                <div className="w-24 h-24 bg-[#F4EFE6] rounded-2xl flex items-center justify-center mx-auto text-[#A05035] shadow-sm transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                  <Zap size={40} strokeWidth={1.5} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl lg:text-3xl font-serif text-[#3E2723] font-bold">Cymatics</h4>
                  <p className="text-[#3E2723] opacity-90 font-normal leading-relaxed text-lg">
                    Cymatics shows that sound can organise matter into patterns, helping us understand how vibration influences the body at a cellular level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1:1 Healing Highlights */}
      <section className="py-24 md:py-32 lg:py-40 bg-[#F4EFE6]">
        <div className={contentWrapper}>
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[#A05035] font-bold tracking-[0.5em] text-xs uppercase block mb-6">Bespoke Experiences</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#3E2723] mb-8 leading-tight">The Art of <span className="font-serif-italic font-bold">Individualized</span> Resonance</h2>
            <p className="text-[#3E2723] opacity-100 text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed border-t border-[#A05035]/10 pt-8">
              Personalized 1:1 Healing journeys designed for deep nervous-system reset, emotional clarity, and spiritual alignment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {healingServices.map((service) => (
              <div key={service.id} className="group bg-[#FDFBF7] p-5 shadow-2xl border border-[#A05035]/20 transition-all hover:-translate-y-3 duration-500 relative flex flex-col">
                <div className="absolute top-8 left-8 z-10 bg-[#A05035] text-[#FDFBF7] text-[10px] font-bold tracking-[0.3em] px-4 py-2 shadow-xl uppercase">
                  Personal 1:1
                </div>
                <Link to={`/service/${service.id}`} className="block overflow-hidden aspect-[4/5] mb-8 relative shrink-0">
                  <img 
                    