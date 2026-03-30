import { motion } from 'motion/react';
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
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-[#222222] hover:bg-[#2a2a2a] text-white transition-all duration-300 border border-[#333333] hover:border-[#1DCD9F]/30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Languages className="w-4 h-4" />
        <span className="text-sm font-medium uppercase">{language}</span>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full mt-2 right-0 bg-[#222222] border border-[#333333] rounded-lg overflow-hidden shadow-xl min-w-[120px] z-50"
        >
          <button
            onClick={() => toggleLanguage('en')}
            className={`w-full px-4 py-3 text-left text-sm hover:bg-[#2a2a2a] transition-colors ${
              language === 'en' ? 'bg-[#1DCD9F]/10 text-[#1DCD9F]' : 'text-white'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>English</span>
              {language === 'en' && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 bg-[#1DCD9F] rounded-full"
                />
              )}
            </div>
          </button>
          <button
            onClick={() => toggleLanguage('ar')}
            className={`w-full px-4 py-3 text-left text-sm hover:bg-[#2a2a2a] transition-colors ${
              language === 'ar' ? 'bg-[#1DCD9F]/10 text-[#1DCD9F]' : 'text-white'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>العربية</span>
              {language === 'ar' && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 bg-[#1DCD9F] rounded-full"
                />
              )}
            </div>
          </button>
        </motion.div>
      )}
    </div>
  );
}
