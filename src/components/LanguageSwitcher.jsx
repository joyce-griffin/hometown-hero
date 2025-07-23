import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';

const languages = [
  { code: 'en', label: 'English', flag: '/flags/en.png' },
  { code: 'es', label: 'Español', flag: '/flags/es.png' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 bg-[#d4bc6d] text-black font-semibold text-sm px-7 py-4 rounded-full"
      >
        <img src={currentLang.flag} alt={currentLang.label} className="w-5 h-5 rounded-full" />
        {currentLang.label}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white rounded shadow-md z-50 w-36">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 text-left"
            >
              <img src={lang.flag} alt={lang.label} className="w-5 h-5 rounded-full" />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
