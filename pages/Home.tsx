
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';
import { ArrowRight, Star, Youtube, Instagram, Loader2, ChevronLeft, ChevronRight, Gift, CheckCircle2, Waves, Activity, Zap, Play } from 'lucide-react';
import { dataService } from '../services/dataService';
import { submitForm } from '../services/submissionService';
import SEO from '../components/SEO';

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

  const healingServices = services.filter(s => 
    ['tibetan-sound-spa', 'chakra-sound-balancing', 'couples-sound-therapy'].includes(s.id)
  );

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

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Aumkaar",
    "image": "https://i.ibb.co/XZVGhG2h/Aumkaar-20260112-161626-0000.png",
    "@id": "https://aumkaar.in",
    "url": "https://aumkaar.in",
    "telephone": "+919988166977",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4th Floor, Dukes Avenue, Al Hamra Colony, Shaikpet",
      "addressLocality": "Hyderabad",
      "postalCode": "500104",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4087,
      "longitude": 78.4011
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.instagram.com/thatmeditationcouple/",
      "https://www.youtube.com/@thatmeditationcouple",
      "https://www.facebook.com/people/That-meditation-couple/61567859990598/",
      "https://www.linkedin.com/in/karan-gyandeep-6a378a357/"
    ]
  };

  return (
    <div className="w-full bg-[#FDFBF7]">
      <SEO 
        title="Aumkaar | Sound Healing, Meditation & Mind Management Hyderabad" 
        description="Premium Sound Healing, Meditation, and Mind Management sanctuary in Hyderabad. One-stop solution for stress, sleep disorders, and anxiety."
        schema={homeSchema}
      />
      {/* ... rest of the Home.tsx code ... */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
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
        
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[3px] z-10"></div>
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
              <Link to="/contact" className="w-full sm:w-auto px-12 md:px-16 py-6 text-[#FDFBF7] font-bold tracking-[0.5em] text-[11px] hover:text-white transition-all duration-500 shadow-2xl uppercase btn-texture text-center">
                JOIN SESSIONS
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* (Previous section code continues...) */}
      {/* Ensure all images in Home.tsx have ALT tags */}
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
          {/* ... Rest of components ... */}
        </div>
      </section>
      {/* ... (Continue the rest of the file exactly as it was) ... */}
    </div>
  );
};

export default Home;
