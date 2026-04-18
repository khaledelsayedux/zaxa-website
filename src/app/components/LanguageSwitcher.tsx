import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleLanguage = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-surface-overlay hover:bg-surface-raised text-foreground transition-all duration-300 border border-border hover:border-green-400/30 hover:scale-105 active:scale-95 motion-reduce:hover:scale-100 motion-reduce:active:scale-100"
      >
        <Languages className="w-4 h-4" />
        <span className="text-sm font-medium uppercase">{language}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-surface-overlay border border-border rounded-lg overflow-hidden shadow-xl min-w-[120px] z-50 origin-top motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-2 motion-safe:duration-200 motion-reduce:animate-none">
          <button
            type="button"
            onClick={() => toggleLanguage('en')}
            className={`w-full px-4 py-3 text-left text-sm hover:bg-surface-raised transition-colors ${
              language === 'en' ? 'bg-green-400/10 text-green-400' : 'text-foreground'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>English</span>
              {language === 'en' && (
                <span className="w-2 h-2 bg-green-400 rounded-full motion-safe:transition-transform motion-safe:duration-200 motion-safe:scale-100 motion-reduce:transition-none" />
              )}
            </div>
          </button>
          <button
            type="button"
            onClick={() => toggleLanguage('ar')}
            className={`w-full px-4 py-3 text-left text-sm hover:bg-surface-raised transition-colors ${
              language === 'ar' ? 'bg-green-400/10 text-green-400' : 'text-foreground'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>العربية</span>
              {language === 'ar' && (
                <span className="w-2 h-2 bg-green-400 rounded-full motion-safe:transition-transform motion-safe:duration-200 motion-safe:scale-100 motion-reduce:transition-none" />
              )}
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
