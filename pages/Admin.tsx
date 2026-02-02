
import React, { useState, useEffect } from 'react';
import { Youtube, Instagram, BookOpen, Calendar, Clock, Gift, Save, Plus, Trash2, ArrowLeft, Lock, LogOut, User, Image as ImageIcon, Loader2, ShieldCheck, Eye, EyeOff, Heading1, Heading2, AlignLeft, Quote, Video, MapPin, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dataService } from '../services/dataService';
import { LOGOS } from '../assets/logos';

type Section = 'youtube' | 'reels' | 'video-testimonials' | 'blogs' | 'events' | 'freebie' | 'services' | 'security';

const Admin: React.FC = () => {
  // Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Panel State
  const [activeSection, setActiveSection] = useState<Section>('youtube');
  const [youtubeLinks, setYoutubeLinks] = useState(dataService.getYoutubeLinks());
  const [reels, setReels] = useState(dataService.getReels());
  const [videoTestimonials, setVideoTestimonials] = useState(dataService.getVideoTestimonials());
  const [blogs, setBlogs] = useState(dataService.getBlogs());
  const [events, setEvents] = useState(dataService.getEvents());
  const [freebieLink, setFreebieLink] = useState(dataService.getFreebieLink());
  const [serviceOverrides, setServiceOverrides] = useState<Record<string, string>>(dataService.getServiceImageOverrides());
  const [adminAuth, setAdminAuth] = useState(dataService.getAuth());
  
  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  // For rendering service list
  const servicesList = dataService.getServices();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Initial fetch to make sure admin has latest data
    dataService.init().then(() => {
       setYoutubeLinks(dataService.getYoutubeLinks());
       setReels(dataService.getReels());
       setVideoTestimonials(dataService.getVideoTestimonials());
       setBlogs(dataService.getBlogs());
       setEvents(dataService.getEvents());
       setFreebieLink(dataService.getFreebieLink());
       setServiceOverrides(dataService.getServiceImageOverrides());
       setAdminAuth(dataService.getAuth());
    });
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const currentCreds = dataService.getAuth();
    if (loginId === currentCreds.id && loginPassword === currentCreds.password) {
      setIsLoggedIn(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleSave = async () => {
    setIsSyncing(true);
    setSaveStatus('Syncing with database...');
    
    // 1. Save locally
    dataService.setYoutubeLinks(youtubeLinks);
    dataService.setReels(reels);
    dataService.setVideoTestimonials(videoTestimonials);
    dataService.setBlogs(blogs);
    dataService.setEvents(events);
    dataService.setFreebieLink(freebieLink);
    dataService.setServiceImageOverrides(serviceOverrides);
    dataService.setAuth(adminAuth);
    
    // 2. Save to Remote Database
    const success = await dataService.syncToDatabase();
    
    if (success) {
      setSaveStatus('Database updated successfully!');
    } else {
      setSaveStatus('Local update successful. Database sync pending...');
    }
    
    setIsSyncing(false);
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const addItem = (section: Section) => {
    if (section === 'youtube') {
      if (youtubeLinks.length >= 8) {
        alert("Maximum of 8 YouTube videos allowed.");
        return;
      }
      setYoutubeLinks([...youtubeLinks, { url: '', title: '', desc: '' }]);
    }
    if (section === 'reels') {
      if (reels.length >= 8) {
        alert("Maximum of 8 Instagram Reels allowed.");
        return;
      }
      setReels([...reels, { url: '', title: '' }]);
    }
    if (section === 'video-testimonials') {
      setVideoTestimonials([...videoTestimonials, { url: '', title: '' }]);
    }
    if (section === 'blogs') {
      setBlogs([...blogs, { 
        id: Date.now().toString(), 
        title: 'New Post', 
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), 
        author: 'Aumkaar', 
        category: 'Mind Management', 
        excerpt: 'Summary of the article...', 
        content: '<p>Start writing here...</p>', 
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773', 
        readTime: '5 min read' 
      }]);
    }
    if (section === 'events') setEvents([...events, { 
      id: Date.now().toString(), 
      title: 'New Event', 
      date: '', 
      time: '', 
      location: '', 
      locationLink: '',
      price: '', 
      category: '', 
      shortDescription: '', 
      fullDescription: '', 
      image: '', 
      capacity: '', 
      highlights: [], 
      itinerary: [] 
    }]);
  };

  const removeItem = (section: Section, index: number) => {
    if (section === 'youtube') setYoutubeLinks(youtubeLinks.filter((_: any, i: number) => i !== index));
    if (section === 'reels') setReels(reels.filter((_: any, i: number) => i !== index));
    if (section === 'video-testimonials') setVideoTestimonials(videoTestimonials.filter((_: any, i: number) => i !== index));
    if (section === 'blogs') setBlogs(blogs.filter((_: any, i: number) => i !== index));
    if (section === 'events') setEvents(events.filter((_: any, i: number) => i !== index));
  };

  const insertHtml = (idx: number, tag: string) => {
    const textarea = document.getElementById(`blog-content-${idx}`) as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selected = text.substring(start, end);
    
    let wrap = '';
    switch(tag) {
      case 'h2': wrap = `<h2 class="text-3xl font-serif text-[#A05035] mt-10 mb-6">${selected || 'Heading'}</h2>`; break;
      case 'h3': wrap = `<h3 class="text-2xl font-serif text-[#A05035] mt-8 mb-4">${selected || 'Subheading'}</h3>`; break;
      case 'p': wrap = `<p class="mb-6 leading-loose font-light text-xl">${selected || 'New paragraph text...'}</p>`; break;
      case 'quote': wrap = `<blockquote class="border-l-4 border-[#A05035] pl-6 py-2 italic text-2xl font-serif text-[#3E2723]/70 my-10">"${selected || 'Inspiring quote here...'}"</blockquote>`; break;
      case 'bold': wrap = `<strong>${selected || 'bold text'}</strong>`; break;
      case 'italic': wrap = `<em>${selected || 'italic text'}</em>`; break;
      default: wrap = selected;
    }

    const nextText = text.substring(0, start) + wrap + text.substring(end);
    const nextBlogs = [...blogs];
    nextBlogs[idx].content = nextText;
    setBlogs(nextBlogs);
  };

  const handleServiceImageChange = (id: string, url: string) => {
    setServiceOverrides({
      ...serviceOverrides,
      [id]: url
    });
  };

  const updateEvent = (index: number, field: string, value: any) => {
    const nextEvents = [...events];
    nextEvents[index] = { ...nextEvents[index], [field]: value };
    setEvents(nextEvents);
  };

  const handleEventHighlightsChange = (index: number, value: string) => {
    const highlightsArray = value.split('\n').filter(h => h.trim() !== '');
    updateEvent(index, 'highlights', highlightsArray);
  };

  // --- LOGIN SCREEN ---
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-6 bg-texture">
        <div className="absolute inset-0 bg-[#3E2723]/40 backdrop-blur-sm"></div>
        <div className="relative w-full max-md bg-[#FDFBF7] p-10 md:p-14 shadow-[0_30px_100px_rgba(0,0,0,0.5)] rounded-sm border border-[#A05035]/20 animate-fade-in">
          <div className="text-center mb-10">
            <img src={LOGOS.SYMBOL} alt="Aumkaar" className="h-16 mx-auto mb-6 opacity-30" />
            <h1 className="text-4xl font-serif text-[#3E2723] mb-3">Sanctuary Access</h1>
            <p className="text-[10px] font-bold tracking-[0.4em] text-[#A05035] uppercase">Administrative Portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E2723]/30" />
                <input 
                  required
                  type="text" 
                  placeholder="Admin ID" 
                  className="w-full bg-[#F4EFE6]/40 border-b border-[#A05035]/20 py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[#A05035] transition-all text-[#3E2723] placeholder-[#3E2723]/30"
                  value={loginId}
                  onChange={(e) => {
                    setLoginId(e.target.value);
                    setLoginError(false);
                  }}
                />
              </div>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E2723]/30" />
                <input 
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="Password" 
                  className="w-full bg-[#F4EFE6]/40 border-b border-[#A05035]/20 py-4 pl-12 pr-12 text-sm focus:outline-none focus:border-[#A05035] transition-all text-[#3E2723] placeholder-[#3E2723]/30"
                  value={loginPassword}
                  onChange={(e) => {
                    setLoginPassword(e.target.value);
                    setLoginError(false);
                  }}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3E2723]/30 hover:text-[#A05035]"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {loginError && (
              <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest text-center animate-shake">
                Invalid credentials. Please try again.
              </p>
            )}

            <button 
              type="submit" 
              className="w-full py-5 bg-[#A05035] text-white text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#3E2723] transition-all shadow-xl active:scale-95 btn-texture"
            >
              UNLOCK PORTAL
            </button>
            
            <Link to="/" className="block text-center text-[9px] font-bold tracking-widest text-[#3E2723]/40 hover:text-[#A05035] uppercase transition-colors pt-4">
              Return to Website
            </Link>
          </form>
        </div>
      </div>
    );
  }

  // --- ADMIN PANEL ---
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex">
      {/* Sidebar */}
      <div className="w-64 md:w-80 bg-[#3E2723] text-[#FDFBF7] flex flex-col p-8 fixed h-screen z-20 overflow-y-auto">
        <div className="mb-12">
          <Link to="/" className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity mb-8">
            <ArrowLeft size={16} />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Back to Site</span>
          </Link>
          <h1 className="text-3xl font-serif">Admin Portal</h1>
        </div>

        <nav className="space-y-4 flex-grow">
          {[
            { id: 'youtube', label: `YouTube Videos (${youtubeLinks.length}/8)`, icon: Youtube },
            { id: 'reels', label: `Instagram Reels (${reels.length}/8)`, icon: Instagram },
            { id: 'video-testimonials', label: `Video Testimonials (${videoTestimonials.length})`, icon: Video },
            { id: 'blogs', label: 'Journal Articles', icon: BookOpen },
            { id: 'events', label: 'Upcoming Events', icon: Calendar },
            { id: 'services', label: 'Session Hero Images', icon: ImageIcon },
            { id: 'freebie', label: 'Freebie Link', icon: Gift },
            { id: 'security', label: 'Security Settings', icon: ShieldCheck },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id as Section)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all text-left ${
                activeSection === item.id 
                  ? 'bg-[#A05035] text-white shadow-lg translate-x-2' 
                  : 'hover:bg-white/5 opacity-60 hover:opacity-100'
              }`}
            >
              <item.icon size={20} className="shrink-0" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="space-y-4 mt-8 pb-8">
          <button 
            disabled={isSyncing}
            onClick={handleSave}
            className="w-full bg-[#A05035] disabled:bg-[#A05035]/50 hover:bg-white hover:text-[#A05035] text-white py-4 rounded-xl font-bold tracking-[0.4em] text-[10px] uppercase transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95"
          >
            {isSyncing ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            {isSyncing ? "SYNCING..." : "Publish to Site"}
          </button>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="w-full bg-white/5 hover:bg-white/10 text-[#FDFBF7] py-4 rounded-xl font-bold tracking-[0.4em] text-[9px] uppercase transition-all flex items-center justify-center gap-3 opacity-60 hover:opacity-100"
          >
            <LogOut size={14} />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow ml-64 md:ml-80 p-8 md:p-16 lg:p-24 bg-[#FDFBF7]">
        {saveStatus && (
          <div className="fixed top-8 right-8 bg-[#A05035] text-white px-8 py-4 rounded-xl shadow-2xl z-50 animate-bounce text-xs font-bold tracking-widest uppercase">
            {saveStatus}
          </div>
        )}

        <div className="max-w-4xl">
          <header className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#3E2723] capitalize">{activeSection.replace('-', ' ')}</h2>
              <p className="text-[#3E2723]/60 mt-4 font-light">Manage the dynamic content shown on the public website. Changes are cached locally but must be "Published" to sync with the central database.</p>
            </div>
            {activeSection === 'blogs' && (
              <button 
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className={`px-6 py-3 text-[9px] font-bold tracking-widest uppercase border rounded-full transition-all ${isPreviewMode ? 'bg-[#A05035] text-white border-[#A05035]' : 'border-[#3E2723]/10 text-[#3E2723]/60 hover:bg-[#A05035]/5'}`}
              >
                {isPreviewMode ? 'Editing Mode' : 'Live Preview'}
              </button>
            )}
          </header>

          {/* YouTube Section */}
          {activeSection === 'youtube' && (
            <div className="space-y-8">
              {youtubeLinks.map((video: any, idx: number) => (
                <div key={idx} className="bg-white p-8 border border-[#A05035]/10 shadow-sm relative group">
                  <button onClick={() => removeItem('youtube', idx)} className="absolute top-4 right-4 text-[#A05035] opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={18} /></button>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold text-[#A05035] uppercase tracking-widest mb-2">YouTube Video URL</label>
                      <input className="w-full bg-[#FDFBF7] p-3 text-sm focus:outline-none focus:border-[#A05035] border-b border-[#3E2723]/10" placeholder="https://www.youtube.com/watch?v=..." value={video.url} onChange={(e) => {
                        const next = [...youtubeLinks];
                        next[idx].url = e.target.value;
                        setYoutubeLinks(next);
                      }} />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#A05035] uppercase tracking-widest mb-2">Video Title</label>
                      <input className="w-full bg-[#FDFBF7] p-3 text-sm focus:outline-none focus:border-[#A05035] border-b border-[#3E2723]/10" value={video.title} onChange={(e) => {
                        const next = [...youtubeLinks];
                        next[idx].title = e.target.value;
                        setYoutubeLinks(next);
                      }} />
                    </div>
                  </div>
                </div>
              ))}
              {youtubeLinks.length < 8 && (
                <button onClick={() => addItem('youtube')} className="w-full border-2 border-dashed border-[#A05035]/20 p-8 text-[#A05035] flex items-center justify-center gap-3 hover:bg-[#A05035]/5 transition-all uppercase text-[10px] font-bold tracking-widest">
                  <Plus size={20} /> Add YouTube Link
                </button>
              )}
            </div>
          )}

          {/* Video Testimonials Section */}
          {activeSection === 'video-testimonials' && (
            <div className="space-y-8">
              {videoTestimonials.map((video: any, idx: number) => (
                <div key={idx} className="bg-white p-8 border border-[#A05035]/10 shadow-sm relative group">
                  <button onClick={() => removeItem('video-testimonials', idx)} className="absolute top-4 right-4 text-[#A05035] opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={18} /></button>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold text-[#A05035] uppercase tracking-widest mb-2">YouTube URL</label>
                      <input className="w-full bg-[#FDFBF7] p-3 text-sm focus:outline-none focus:border-[#A05035] border-b border-[#3E2723]/10" placeholder="https://youtu.be/..." value={video.url} onChange={(e) => {
                        const next = [...videoTestimonials];
                        next[idx].url = e.target.value;
                        setVideoTestimonials(next);
                      }} />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#A05035] uppercase tracking-widest mb-2">Title / Label</label>
                      <input className="w-full bg-[#FDFBF7] p-3 text-sm focus:outline-none focus:border-[#A05035] border-b border-[#3E2723]/10" value={video.title} onChange={(e) => {
                        const next = [...videoTestimonials];
                        next[idx].title = e.target.value;
                        setVideoTestimonials(next);
                      }} />
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={() => addItem('video-testimonials')} className="w-full border-2 border-dashed border-[#A05035]/20 p-8 text-[#A05035] flex items-center justify-center gap-3 hover:bg-[#A05035]/5 transition-all uppercase text-[10px] font-bold tracking-widest">
                <Plus size={20} /> Add Video Testimonial
              </button>
            </div>
          )}

          {/* Reels Section */}
          {activeSection === 'reels' && (
            <div className="space-y-8">
              {reels.map((reel: any, idx: number) => (
                <div key={idx} className="bg-white p-8 border border-[#A05035]/10 shadow-sm relative group">
                  <button onClick={() => removeItem('reels', idx)} className="absolute top-4 right-4 text-[#A05035] opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={18} /></button>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold text-[#A05035] uppercase tracking-widest mb-2">Instagram Reel URL</label>
                      <input className="w-full bg-[#FDFBF7] p-3 text-sm focus:outline-none focus:border-[#A05035] border-b border-[#3E2723]/10" placeholder="https://www.instagram.com/reel/..." value={reel.url} onChange={(e) => {
                        const next = [...reels];
                        next[idx].url = e.target.value;
                        setReels(next);
                      }} />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#A05035] uppercase tracking-widest mb-2">Label</label>
                      <input className="w-full bg-[#FDFBF7] p-3 text-sm focus:outline-none focus:border-[#A05035] border-b border-[#3E2723]/10" value={reel.title} onChange={(e) => {
                        const next = [...reels];
                        next[idx].title = e.target.value;
                        setReels(next);
                      }} />
                    </div>
                  </div>
                </div>
              ))}
              {reels.length < 8 && (
                <button onClick={() => addItem('reels')} className="w-full border-2 border-dashed border-[#A05035]/20 p-8 text-[#A05035] flex items-center justify-center gap-3 hover:bg-[#A05035]/5 transition-all uppercase text-[10px] font-bold tracking-widest">
                  <Plus size={20} /> Add Instagram Reel
                </button>
              )}
            </div>
          )}

          {/* Enhanced Blogs Section */}
          {activeSection === 'blogs' && (
            <div className="space-y-16">
              {blogs.map((post: any, idx: number) => (
                <div key={idx} className="bg-white border border-[#A05035]/10 shadow-sm relative group overflow-hidden">
                  <button 
                    onClick={() => removeItem('blogs', idx)} 
                    className="absolute top-6 right-6 text-[#A05035] opacity-0 group-hover:opacity-100 transition-opacity z-10 p-2 hover:bg-red-50 rounded-full"
                  >
                    <Trash2 size={20} />
                  </button>

                  <div className="p-8 md:p-10 space-y-8">
                    {/* Header Metadata */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-[#A05035]/5 pb-8">
                      <div className="md:col-span-2 space-y-2">
                        <label className="block text-[9px] font-bold text-[#A05035] uppercase tracking-[0.3em]">Article Title</label>
                        <input 
                          className="w-full text-2xl font-serif text-[#3E2723] focus:outline-none bg-transparent placeholder-[#3E2723]/20" 
                          value={post.title} 
                          onChange={(e) => {
                            const next = [...blogs];
                            next[idx].title = e.target.value;
                            setBlogs(next);
                          }} 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[9px] font-bold text-[#A05035] uppercase tracking-[0.3em]">Publish Date</label>
                        <input 
                          className="w-full text-xs text-[#3E2723]/60 uppercase tracking-widest focus:outline-none bg-transparent" 
                          value={post.date} 
                          onChange={(e) => {
                            const next = [...blogs];
                            next[idx].date = e.target.value;
                            setBlogs(next);
                          }} 
                        />
                      </div>
                    </div>

                    {/* Excerpt and Image */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="block text-[9px] font-bold text-[#A05035] uppercase tracking-[0.3em]">Hero Image URL</label>
                        <div className="flex gap-4 items-center">
                          <div className="w-16 h-16 bg-[#FDFBF7] border border-[#A05035]/10 rounded-sm overflow-hidden shrink-0">
                            <img src={post.image} alt="Preview" className="w-full h-full object-cover" />
                          </div>
                          <input 
                            className="w-full text-[10px] text-[#3E2723]/60 focus:outline-none bg-transparent border-b border-[#A05035]/10 py-2" 
                            value={post.image} 
                            placeholder="https://images.unsplash.com/..." 
                            onChange={(e) => {
                              const next = [...blogs];
                              next[idx].image = e.target.value;
                              setBlogs(next);
                            }} 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[9px] font-bold text-[#A05035] uppercase tracking-[0.3em]">Article Excerpt (Teaser)</label>
                        <textarea 
                          className="w-full text-sm text-[#3E2723]/70 font-light bg-[#FDFBF7] p-3 h-16 focus:outline-none border border-[#A05035]/5 resize-none" 
                          value={post.excerpt} 
                          onChange={(e) => {
                            const next = [...blogs];
                            next[idx].excerpt = e.target.value;
                            setBlogs(next);
                          }} 
                        />
                      </div>
                    </div>

                    {/* Rich Text Area */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="block text-[9px] font-bold text-[#A05035] uppercase tracking-[0.3em]">Article Content (Rich Text)</label>
                        <div className="flex gap-2">
                          {[
                            { tag: 'h2', icon: <Heading1 size={14} />, label: 'Heading' },
                            { tag: 'h3', icon: <Heading2 size={14} />, label: 'Sub' },
                            { tag: 'p', icon: <AlignLeft size={14} />, label: 'Para' },
                            { tag: 'quote', icon: <Quote size={14} />, label: 'Quote' },
                            { tag: 'bold', icon: <span className="font-bold">B</span>, label: 'Bold' },
                            { tag: 'italic', icon: <span className="italic">I</span>, label: 'Italic' },
                          ].map(btn => (
                            <button
                              key={btn.tag}
                              onClick={() => insertHtml(idx, btn.tag)}
                              className="p-2 bg-[#FDFBF7] border border-[#A05035]/10 text-[#3E2723] hover:bg-[#A05035] hover:text-white transition-all rounded-md flex items-center gap-1.5"
                              title={btn.label}
                            >
                              {btn.icon}
                              <span className="text-[8px] font-bold uppercase tracking-widest hidden lg:inline">{btn.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {isPreviewMode ? (
                        <div 
                          className="w-full min-h-[400px] p-10 bg-[#FDFBF7] border border-[#A05035]/10 prose prose-stone max-w-none prose-p:text-xl prose-p:font-light prose-p:leading-loose prose-p:text-[#3E2723]/90 prose-headings:font-serif prose-headings:text-[#3E2723]"
                          dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                      ) : (
                        <textarea 
                          id={`blog-content-${idx}`}
                          className="w-full min-h-[400px] text-sm font-mono text-[#3E2723]/80 bg-[#FDFBF7] p-8 focus:outline-none border border-[#A05035]/10 leading-relaxed rounded-md" 
                          value={post.content} 
                          onChange={(e) => {
                            const next = [...blogs];
                            next[idx].content = e.target.value;
                            setBlogs(next);
                          }} 
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={() => addItem('blogs')} className="w-full border-2 border-dashed border-[#A05035]/20 p-12 text-[#A05035] flex items-center justify-center gap-4 hover:bg-[#A05035]/5 transition-all uppercase text-[11px] font-bold tracking-[0.4em]">
                <Plus size={24} /> Create New Journal Article
              </button>
            </div>
          )}

          {/* Events Section - Updated with Date/Time Pickers and Location Link */}
          {activeSection === 'events' && (
            <div className="space-y-12">
              {events.map((ev: any, idx: number) => (
                <div key={idx} className="bg-white p-8 md:p-12 border border-[#A05035]/10 shadow-sm relative group space-y-8">
                  <button onClick={() => removeItem('events', idx)} className="absolute top-6 right-6 text-[#A05035] opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={20} /></button>
                  
                  <div className="space-y-4">
                    <label className="block text-[10px] font-bold text-[#A05035] uppercase tracking-widest">Event Title</label>
                    <input className="text-2xl font-serif text-[#3E2723] w-full focus:outline-none bg-[#FDFBF7] p-4 border-b border-[#A05035]/10" value={ev.title} onChange={(e) => updateEvent(idx, 'title', e.target.value)} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold text-[#3E2723]/40 uppercase tracking-widest flex items-center gap-2"><Calendar size={12}/> Select Date</label>
                      <input type="date" className="w-full text-sm bg-[#FDFBF7] p-3 focus:outline-none border-b border-[#3E2723]/10" value={ev.date} onChange={(e) => updateEvent(idx, 'date', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold text-[#3E2723]/40 uppercase tracking-widest flex items-center gap-2"><Clock size={12}/> Select Time</label>
                      <input type="time" className="w-full text-sm bg-[#FDFBF7] p-3 focus:outline-none border-b border-[#3E2723]/10" value={ev.time} onChange={(e) => updateEvent(idx, 'time', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold text-[#3E2723]/40 uppercase tracking-widest">Price</label>
                      <input className="w-full text-sm bg-[#FDFBF7] p-3 focus:outline-none border-b border-[#3E2723]/10" value={ev.price} placeholder="e.g. $45" onChange={(e) => updateEvent(idx, 'price', e.target.value)} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold text-[#3E2723]/40 uppercase tracking-widest flex items-center gap-2"><MapPin size={12}/> Venue Name</label>
                      <input className="w-full text-sm bg-[#FDFBF7] p-3 focus:outline-none border-b border-[#3E2723]/10" value={ev.location} placeholder="Name of location" onChange={(e) => updateEvent(idx, 'location', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold text-[#3E2723]/40 uppercase tracking-widest flex items-center gap-2"><LinkIcon size={12}/> Location Link (Google Maps)</label>
                      <input className="w-full text-sm bg-[#FDFBF7] p-3 focus:outline-none border-b border-[#3E2723]/10 text-[#A05035]" value={ev.locationLink || ''} placeholder="https://maps.google.com/..." onChange={(e) => updateEvent(idx, 'locationLink', e.target.value)} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold text-[#3E2723]/40 uppercase tracking-widest">Capacity</label>
                      <input className="w-full text-sm bg-[#FDFBF7] p-3 focus:outline-none border-b border-[#3E2723]/10" value={ev.capacity} placeholder="e.g. 15 Seats Left" onChange={(e) => updateEvent(idx, 'capacity', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold text-[#3E2723]/40 uppercase tracking-widest">Category</label>
                      <input className="w-full text-sm bg-[#FDFBF7] p-3 focus:outline-none border-b border-[#3E2723]/10" value={ev.category} placeholder="e.g. Ritual" onChange={(e) => updateEvent(idx, 'category', e.target.value)} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-[#3E2723]/40 uppercase tracking-widest">Image URL</label>
                    <input className="w-full text-xs text-[#A05035] uppercase tracking-widest focus:outline-none bg-[#FDFBF7] p-3 border-b border-[#3E2723]/10" value={ev.image} placeholder="Event Image URL" onChange={(e) => updateEvent(idx, 'image', e.target.value)} />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-[#3E2723]/40 uppercase tracking-widest">Short Description</label>
                    <input className="w-full text-sm bg-[#FDFBF7] p-3 focus:outline-none border-b border-[#3E2723]/10" value={ev.shortDescription} placeholder="Brief teaser text" onChange={(e) => updateEvent(idx, 'shortDescription', e.target.value)} />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-[#3E2723]/40 uppercase tracking-widest">Full Description</label>
                    <textarea className="w-full text-sm bg-[#FDFBF7] p-4 h-32 focus:outline-none border border-[#3E2723]/10 resize-none" value={ev.fullDescription} placeholder="Detailed event narrative" onChange={(e) => updateEvent(idx, 'fullDescription', e.target.value)} />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-[#3E2723]/40 uppercase tracking-widest">Event Highlights (One per line)</label>
                    <textarea className="w-full text-sm bg-[#FDFBF7] p-4 h-24 focus:outline-none border border-[#3E2723]/10 resize-none" value={ev.highlights?.join('\n')} placeholder="List key highlights..." onChange={(e) => handleEventHighlightsChange(idx, e.target.value)} />
                  </div>
                </div>
              ))}
              <button onClick={() => addItem('events')} className="w-full border-2 border-dashed border-[#A05035]/20 p-8 text-[#A05035] flex items-center justify-center gap-3 hover:bg-[#A05035]/5 transition-all uppercase text-[10px] font-bold tracking-widest">
                <Plus size={20} /> Add New Event
              </button>
            </div>
          )}

          {/* Services Hero Images Section */}
          {activeSection === 'services' && (
            <div className="space-y-10">
              {servicesList.map((service) => (
                <div key={service.id} className="bg-white p-8 border border-[#A05035]/10 shadow-sm transition-all hover:shadow-md">
                   <div className="flex flex-col md:flex-row gap-8 items-start">
                     <div className="w-full md:w-48 aspect-[3/4] shrink-0 bg-[#F4EFE6] overflow-hidden rounded-sm shadow-inner">
                        <img 
                          src={serviceOverrides[service.id] || service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover"
                        />
                     </div>
                     <div className="flex-grow space-y-6">
                        <div className="space-y-1">
                          <h4 className="text-xl font-serif text-[#3E2723]">{service.title}</h4>
                          <span className="text-[10px] font-bold text-[#A05035] uppercase tracking-[0.2em]">{service.category}</span>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="block text-[10px] font-bold text-[#3E2723]/40 uppercase tracking-widest">Image URL</label>
                          <input 
                            className="w-full bg-[#FDFBF7] p-4 text-sm focus:outline-none focus:border-[#A05035] border-b border-[#3E2723]/10 text-[#3E2723]" 
                            placeholder="Paste direct image URL here..."
                            value={serviceOverrides[service.id] || ''} 
                            onChange={(e) => handleServiceImageChange(service.id, e.target.value)} 
                          />
                        </div>
                     </div>
                   </div>
                </div>
              ))}
            </div>
          )}

          {/* Freebie Section */}
          {activeSection === 'freebie' && (
            <div className="bg-white p-12 border border-[#A05035]/10 shadow-sm space-y-8">
              <div>
                <label className="block text-[11px] font-bold text-[#A05035] uppercase tracking-widest mb-4">Downloadable Resource Link</label>
                <input 
                  className="w-full bg-[#FDFBF7] p-5 text-lg font-serif text-[#3E2723] focus:outline-none focus:border-[#A05035] border border-[#3E2723]/10" 
                  value={freebieLink} 
                  onChange={(e) => setFreebieLink(e.target.value)} 
                  placeholder="https://drive.google.com/..."
                />
              </div>
            </div>
          )}

          {/* Security Section */}
          {activeSection === 'security' && (
            <div className="bg-white p-12 border border-[#A05035]/10 shadow-sm space-y-12">
              <div className="space-y-8">
                <div>
                  <label className="block text-[11px] font-bold text-[#A05035] uppercase tracking-widest mb-4">Admin Username (ID)</label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E2723]/30" />
                    <input 
                      className="w-full bg-[#FDFBF7] py-5 pl-12 pr-4 text-lg font-serif text-[#3E2723] focus:outline-none focus:border-[#A05035] border border-[#3E2723]/10" 
                      value={adminAuth.id} 
                      onChange={(e) => setAdminAuth({ ...adminAuth, id: e.target.value })} 
                      placeholder="Enter new Admin ID"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#A05035] uppercase tracking-widest mb-4">Admin Password</label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3E2723]/30" />
                    <input 
                      type={showPassword ? "text" : "password"}
                      className="w-full bg-[#FDFBF7] py-5 pl-12 pr-12 text-lg font-serif text-[#3E2723] focus:outline-none focus:border-[#A05035] border border-[#3E2723]/10" 
                      value={adminAuth.password} 
                      onChange={(e) => setAdminAuth({ ...adminAuth, password: e.target.value })} 
                      placeholder="Enter new password"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3E2723]/30 hover:text-[#A05035]"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-[#A05035]/5 border-l-4 border-[#A05035]">
                <p className="text-sm text-[#3E2723]/70 leading-relaxed">
                  <strong>Important:</strong> Changing these values will update your login credentials for this device and others once you <strong>Publish to Site</strong>. Ensure you remember your new credentials before signing out.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
