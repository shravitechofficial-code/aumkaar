
import { BLOG_POSTS, EVENTS, SERVICES, DATA_API_URL } from '../constants';
import { BlogPost, Event, Service } from '../types';

// Keys for localStorage (used as cache)
const STORAGE_KEYS = {
  YOUTUBE: 'aumkaar_youtube_links',
  REELS: 'aumkaar_instagram_reels',
  VIDEO_TESTIMONIALS: 'aumkaar_video_testimonials',
  BLOGS: 'aumkaar_blogs',
  EVENTS: 'aumkaar_events',
  FREEBIE: 'aumkaar_freebie_link',
  SERVICE_IMAGES: 'aumkaar_service_images',
  AUTH: 'aumkaar_admin_auth'
};

// Initial Defaults (Fallback data if database is empty or unreachable)
const DEFAULT_YOUTUBE = [
  { url: 'https://www.youtube.com/watch?v=8EO899rusyo', title: 'Sacred Resonance', desc: 'A deep immersion into vibrational healing and stillness.' },
  { url: 'https://www.youtube.com/watch?v=ElmwWFJnu1E', title: 'The Sound of Silence', desc: 'A journey into the deep resonance of stillness and healing frequencies.' },
  { url: 'https://www.youtube.com/watch?v=Tz5rSdec6sY', title: 'Cellular Reset Ritual', desc: 'Harnessing vibrational energy to rejuvenate your natural internal harmony.' },
  { url: 'https://www.youtube.com/watch?v=tOFe_eCMyZE', title: 'Tibetan Bowl Symphony', desc: 'Sacred Himalayan instruments layered for deep nervous system restoration.' },
  { url: 'https://www.youtube.com/watch?v=EqM5FhIdvjg', title: 'Mind Mastery Protocol', desc: 'Practical rituals to clear mental clutter and anchor your presence.' },
  { url: 'https://www.youtube.com/watch?v=1gZVITxyuVo', title: 'Nature’s Resonance', desc: 'Syncing your energy with the subtle rhythms of the earth and sound.' }
];

const DEFAULT_REELS = [
  { url: 'https://www.instagram.com/reel/DI5etVxTY08/', title: 'Sacred Resonance' },
  { url: 'https://www.instagram.com/reel/DHS4Uu-ShAI/', title: 'Eternal Stillness' },
  { url: 'https://www.instagram.com/reel/DSgwGIJEirf/', title: 'Vibrational Bliss' },
  { url: 'https://www.instagram.com/reel/DSl9IbektnW/', title: 'Inner Journey' }
];

const DEFAULT_VIDEO_TESTIMONIALS = [
  { url: 'https://youtu.be/cCe7wUJKF1A', title: 'Life Transformation' },
  { url: 'https://youtu.be/BS3prMmbUpE', title: 'Deep Inner Peace' },
  { url: 'https://youtu.be/MC2qnV7HPBU', title: 'Nervous System Reset' },
  { url: 'https://youtu.be/NhQCPJNH1NI', title: 'A New Perspective' },
  { url: 'https://youtu.be/vCaD8qI2KLM', title: 'Healing Journey' },
  { url: 'https://youtu.be/b38_dvhyuGE', title: 'Stress Relief' },
  { url: 'https://youtu.be/zChUmcTXSP8', title: 'Mind Mastery' },
  { url: 'https://youtu.be/lj11PoatGys', title: 'Vibrational Shift' },
  { url: 'https://youtu.be/hWgxbVI8Onc', title: 'Soul Resonance' },
  { url: 'https://youtu.be/rVpQg_FS2Og', title: 'Gratitude Story' }
];

const DEFAULT_FREEBIE = 'https://drive.google.com/file/d/1EnCTs5Ixe1j1U9m9j98x8pULIL_1cGqP/view?usp=sharing';

const DEFAULT_AUTH = {
  id: 'aumkaar_admin_jan2026',
  password: 'password'
};

export const dataService = {
  // Global initializer to sync local state with Database
  init: async () => {
    try {
      if (!DATA_API_URL) return false;
      
      const response = await fetch(DATA_API_URL);
      if (!response.ok) throw new Error('Failed to fetch site data');
      
      const remoteData = await response.json();
      
      // Update local storage cache if data exists in database
      if (remoteData && typeof remoteData === 'object' && Object.keys(remoteData).length > 0) {
        if (remoteData.youtube) localStorage.setItem(STORAGE_KEYS.YOUTUBE, JSON.stringify(remoteData.youtube));
        if (remoteData.reels) localStorage.setItem(STORAGE_KEYS.REELS, JSON.stringify(remoteData.reels));
        if (remoteData.videoTestimonials) localStorage.setItem(STORAGE_KEYS.VIDEO_TESTIMONIALS, JSON.stringify(remoteData.videoTestimonials));
        if (remoteData.blogs) localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(remoteData.blogs));
        if (remoteData.events) localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(remoteData.events));
        if (remoteData.freebie) localStorage.setItem(STORAGE_KEYS.FREEBIE, remoteData.freebie);
        if (remoteData.serviceImages) localStorage.setItem(STORAGE_KEYS.SERVICE_IMAGES, JSON.stringify(remoteData.serviceImages));
        if (remoteData.auth) localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(remoteData.auth));
      }
      
      return true;
    } catch (error) {
      console.warn('Data sync failed, using cached/default data:', error);
      return false;
    }
  },

  // Save the entire site state to the external database
  syncToDatabase: async () => {
    try {
      if (!DATA_API_URL) throw new Error("API URL not configured");
      
      const payload = {
        youtube: dataService.getYoutubeLinks(),
        reels: dataService.getReels(),
        videoTestimonials: dataService.getVideoTestimonials(),
        blogs: dataService.getBlogs(),
        events: dataService.getEvents(),
        freebie: dataService.getFreebieLink(),
        serviceImages: dataService.getServiceImageOverrides(),
        auth: dataService.getAuth()
      };

      await fetch(DATA_API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      return true;
    } catch (error) {
      console.error('Database sync failed:', error);
      return false;
    }
  },

  // Auth Management
  getAuth: () => {
    const saved = localStorage.getItem(STORAGE_KEYS.AUTH);
    return saved ? JSON.parse(saved) : DEFAULT_AUTH;
  },
  setAuth: (auth: typeof DEFAULT_AUTH) => {
    localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(auth));
  },

  // YouTube
  getYoutubeLinks: () => {
    const saved = localStorage.getItem(STORAGE_KEYS.YOUTUBE);
    return saved ? JSON.parse(saved) : DEFAULT_YOUTUBE;
  },
  setYoutubeLinks: (links: any[]) => localStorage.setItem(STORAGE_KEYS.YOUTUBE, JSON.stringify(links)),

  // Instagram Reels
  getReels: () => {
    const saved = localStorage.getItem(STORAGE_KEYS.REELS);
    return saved ? JSON.parse(saved) : DEFAULT_REELS;
  },
  setReels: (reels: any[]) => localStorage.setItem(STORAGE_KEYS.REELS, JSON.stringify(reels)),

  // Video Testimonials
  getVideoTestimonials: () => {
    const saved = localStorage.getItem(STORAGE_KEYS.VIDEO_TESTIMONIALS);
    return saved ? JSON.parse(saved) : DEFAULT_VIDEO_TESTIMONIALS;
  },
  setVideoTestimonials: (videos: any[]) => localStorage.setItem(STORAGE_KEYS.VIDEO_TESTIMONIALS, JSON.stringify(videos)),

  // Blogs
  getBlogs: (): BlogPost[] => {
    const saved = localStorage.getItem(STORAGE_KEYS.BLOGS);
    const savedData = saved ? JSON.parse(saved) : [];
    if (savedData.length === 0) return BLOG_POSTS;
    return savedData;
  },
  setBlogs: (blogs: BlogPost[]) => localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(blogs)),

  // Events
  getEvents: (): Event[] => {
    const saved = localStorage.getItem(STORAGE_KEYS.EVENTS);
    return saved ? JSON.parse(saved) : EVENTS;
  },
  setEvents: (events: Event[]) => localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events)),

  // Services
  getServices: (): Service[] => {
    const savedOverrides = localStorage.getItem(STORAGE_KEYS.SERVICE_IMAGES);
    if (!savedOverrides) return SERVICES;
    
    const overrides = JSON.parse(savedOverrides);
    return SERVICES.map(service => ({
      ...service,
      image: overrides[service.id] || service.image
    }));
  },
  getServiceImageOverrides: (): Record<string, string> => {
    const saved = localStorage.getItem(STORAGE_KEYS.SERVICE_IMAGES);
    return saved ? JSON.parse(saved) : {};
  },
  setServiceImageOverrides: (overrides: Record<string, string>) => {
    localStorage.setItem(STORAGE_KEYS.SERVICE_IMAGES, JSON.stringify(overrides));
  },

  // Freebie
  getFreebieLink: () => {
    return localStorage.getItem(STORAGE_KEYS.FREEBIE) || DEFAULT_FREEBIE;
  },
  setFreebieLink: (link: string) => localStorage.setItem(STORAGE_KEYS.FREEBIE, link)
};
