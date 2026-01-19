
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { LOGOS } from '../assets/logos';
import { dataService } from '../services/dataService';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
    setExpandedMobileMenu(null);
  }, [location]);

  const isHome = location.pathname === '/';
  const headerPadding = scrolled ? 'py-3' : 'py-5 md:py-6';
  
  const getHeaderBg = () => {
    if (isMobileMenuOpen) return 'bg-[#FDFBF7]';
    if (scrolled) return 'bg-[#FDFBF7] shadow-[0_4px_30px_rgba(0,0,0,0.06)]';
    if (isHome) return 'bg-transparent';
    return 'bg-[#FDFBF7]';
  };

  const getTextColor = () => {
    if (isMobileMenuOpen) return 'text-[#3E2723]';
    if (scrolled) return 'text-[#3E2723]';
    if (isHome) return 'text-[#FDFBF7]';
    return 'text-[#3E2723]';
  };

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobileMenu(expandedMobileMenu === label ? null : label);
  };

  // Determine which logo to show
  const currentLogo = (isHome && !scrolled && !isMobileMenuOpen) ? LOGOS.ON_DARK : LOGOS.ON_LIGHT;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${getHeaderBg()} ${headerPadding}`}
    >
      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 xl:px-16">
        <div className="flex justify-between items-center">
          
          {/* Brand Logo Image */}
          <Link to="/" className="transition-all duration-300 transform hover:opacity-80">
            <img 
              src={currentLogo} 
              alt="Aumkaar Logo" 
              className="h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 xl:space-x-8 flex-nowrap">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.label} 
                className="relative group h-full flex items-center"
                onMouseEnter={() => setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link 
                  to={item.path || '/'} 
                  className={`flex items-center text-[12px] font-bold tracking-[0.2em] uppercase transition-colors py-2 whitespace-nowrap ${
                    location.pathname === item.path 
                      ? (scrolled ? 'text-[#A05035]' : (isHome ? 'text-white border-b border-white' : 'text-[#A05035]')) 
                      : `${getTextColor()} hover:text-[#A05035]`
                  }`}
                >
                  {item.label}
                  {item.submenu && <ChevronDown size={12} className={`ml-1.5 transition-transform duration-300 ${activeSubmenu === item.label ? 'rotate-180' : 'rotate-0'}`} />}
                </Link>

                {item.submenu && (
                  <div 
                    className={`absolute left-[-1rem] top-full mt-4 w-64 bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-300 transform origin-top border border-[#F4EFE6] overflow-hidden ${
                      activeSubmenu === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                    }`}
                  >
                    <div className="py-6">
                      {item.submenu.map((subItem, idx) => {
                         if (subItem.isHeader) {
                           return (
                             <div key={idx} className="px-8 py-2 text-[9px] font-bold text-[#A05035] uppercase tracking-[0.3em] mt-3 first:mt-0 opacity-40">
                               {subItem.label}
                             </div>
                           );
                         }
                         return (
                          <Link
                            key={subItem.path || idx}
                            to={subItem.path || '#'}
                            className="block px-8 py-2.5 text-[13px] text-[#3E2723] hover:bg-[#FDFBF7] hover:text-[#A05035] transition-all font-medium border-l-4 border-transparent hover:border-[#A05035]"
                          >
                            {subItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link 
              to="/contact" 
              className={`ml-4 xl:ml-8 px-7 py-3 text-[10px] font-bold tracking-[0.3em] rounded-full transition-all duration-300 shadow-lg whitespace-nowrap btn-texture text-[#FDFBF7] hover:text-white`}
            >
              CONTACT US
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`xl:hidden focus:outline-none p-2 transition-transform active:scale-90 relative z-[60] ${getTextColor()}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`xl:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-[#FDFBF7] transition-all duration-500 ease-in-out z-[50] overflow-y-auto ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
        }`}
      >
        <div className="px-10 pt-24 pb-20 space-y-3 max-w-lg mx-auto md:max-w-xl text-center">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block mb-6 transition-transform active:scale-95">
            <img src={LOGOS.SYMBOL} alt="Aumkaar Symbol" className="h-20 mx-auto opacity-40" />
          </Link>
          
          <div className="pb-6">
             <Link 
              to="/contact" 
              className="block w-full text-center px-8 py-4 text-[#FDFBF7] text-xs font-bold tracking-[0.4em] rounded-full shadow-xl active:scale-95 transition-transform uppercase btn-texture"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </div>

          {NAV_ITEMS.map((item, i) => (
            <div key={item.label} className="border-b border-[#3E2723]/5 last:border-0 pb-2">
              {item.submenu ? (
                <button
                  onClick={() => toggleMobileSubmenu(item.label)}
                  className="flex items-center justify-center gap-3 w-full text-center py-2"
                >
                  <span className={`text-2xl md:text-3xl font-serif transition-colors ${expandedMobileMenu === item.label ? 'text-[#A05035]' : 'text-[#3E2723]'}`}>
                    {item.label}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`text-[#A05035] transition-transform duration-300 ${expandedMobileMenu === item.label ? 'rotate-180' : ''}`} 
                  />
                </button>
              ) : (
                <Link
                  to={item.path || '/'}
                  className="block text-2xl md:text-3xl font-serif text-[#3E2723] py-2 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}

              {item.submenu && (
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedMobileMenu === item.label ? 'max-h-[1000px] opacity-100 mt-2 mb-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="space-y-3 pt-1 text-center">
                    {item.submenu.map((subItem, idx) => (
                      subItem.isHeader ? (
                        <div key={idx} className="text-[10px] md:text-xs font-bold text-[#A05035]/50 uppercase tracking-[0.3em] pt-2 first:pt-0">
                          {subItem.label}
                        </div>
                      ) : (
                        <Link
                          key={subItem.path || idx}
                          to={subItem.path || '#'}
                          className="block text-[#3E2723] text-lg md:text-xl font-serif opacity-80 active:text-[#A05035] transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
