import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const { t } = useTranslation(); // initialize translation

  const navItems = [
    {
      name: 'about',
      link: 'our-team',
    },
    {
      name: 'services',
      link: 'athletes',
    },
    {
      name: 'shop_by',
      link: 'explore-athletes',
    },
    {
      name: 'quick_links',
      items: [
        { name: 'faq', href: '/faq' },
        { name: 'policy', href: '/policy' },
      ],
    },
  ];

  const handleMouseEnter = (record) => {
    setOpenDropdown(record);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      <header className="bg-black py-[29px]">
        <div className="flex items-center justify-between 2xl:max-w-[1880px] lg:max-w-[1400px] mx-auto">
          <Link to="/">
            <img src="/logo.png" alt="logo" className="h-[4.75rem]" />
          </Link>

          <div className="bg-[#ffffff19] rounded-full flex gap-4 px-[3.25rem] h-[4rem]">
            {navItems?.map((item) => (
              <div
                key={item.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item?.link ?? "#"}
                  className="text-base font-medium text-white capitalize inline-flex"
                >
                  {t(item?.name)}
                  {item?.items?.length > 0 && (
                    <>
                      {openDropdown === item ? (
                        <ChevronUp size="1.2rem" color="#d4bc6d" className="ms-[5px]" />
                      ) : (
                        <ChevronDown size="1.2rem" color="#d4bc6d" className="ms-[5px]" />
                      )}
                    </>
                  )}
                </Link>

                {openDropdown?.name === item?.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 bg-black rounded-lg shadow-xl z-10 overflow-hidden">
                    <div className="p-3">
                      {item?.items?.map((link) => (
                        <Link
                          key={link?.name}
                          to={link?.href || "#"}
                          className="block px-4 py-2 text-white font-medium text-base hover:bg-[#d4bc6d] hover:text-black rounded-md transition-colors duration-200"
                        >
                          {t(link?.name)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href="/login"
              className="border border-2 border-[#d4bc6d] text-white rounded-full uppercase px-[2.375rem] py-[0.813rem] text-black font-semibold text-[0.875rem] mb-1"
            >
              {t("login")}
            </a>
            <Link
              to="/athlete-signup"
              className="bg-[#d4bc6d] rounded-full uppercase px-[38px] py-[13px] text-black font-semibold text-[0.875rem] mb-1"
            >
              {t("sign_up_as")}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
