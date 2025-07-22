import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Link } from 'react-router-dom';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    {
      name: 'about',
      link: 'our-team',
      // items: [
      //   { name: 'Our Story', href: '#' },
      //   { name: 'Team', href: '/our-team' },
      //   { name: 'Careers', href: '#' },
      // ],
    },
    {
      name: 'services',
      link: 'athletes',
      // items: [
      //   { name: 'Consulting', href: '#' },
      //   { name: 'Support', href: '#' },
      //   { name: 'Training', href: '#' },
      // ],
    },
    {
      name: 'shop by',
      link: 'explore-athletes',
      // items: [
      //   { name: 'Category', href: '#' },
      //   { name: 'Brand', href: '#' },
      //   { name: 'Price', href: '#' },
      // ],
    },
    {
      name: 'quick links',
      items: [
        { name: 'FAQ', href: '/faq' },
        { name: 'Policy', href: '/policy' },
      ],
    },
  ];
  // Handlers for mouse enter and leave events to control dropdown visibility
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
          <Link to="/" className="">
            <img src="/logo.png" alt="logo" className='h-[4.75rem]' />
          </Link>
          <div className="bg-[#ffffff19] rounded-full flex gap-4 px-[3.25rem] h-[4rem]">
            {navItems?.map((item) => (
              <div
                key={item.title}
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <Link to={item?.link ?? "#"} className='text-base font-medium text-white capitalize inline-flex'>
                  {item?.name}
                  {item?.items?.length > 0 && (
                    <>
                      {(openDropdown == item?.name) ? (
                        <ChevronUp size="1.2rem" color="#d4bc6d" className="ms-[5px]" />
                      ) : (
                        <ChevronDown size="1.2rem" color="#d4bc6d" className="ms-[5px]" />
                      )}
                    </>
                  )}

                </Link>
                {/* Dropdown Menu */}
                {openDropdown?.name == item?.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 bg-black rounded-lg shadow-xl z-10 overflow-hidden">
                    <div className="p-3">
                      {item?.items?.map((link) => (
                        <Link
                          key={link?.name}
                          to={link?.href || "#"}
                          className="block px-4 py-2 text-white font-medium text-base hover:bg-[#d4bc6d] hover:text-black rounded-md transition-colors duration-200"
                        >
                          {link?.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <a href='/login' className="border border-2 border-[#d4bc6d] text-white rounded-full uppercase px-[2.375rem] py-[0.813rem] text-black font-semibold text-[0.875rem] mb-9">
              login
            </a>
            <Link to='/athlete-signup' className="bg-[#d4bc6d] rounded-full uppercase px-[38px] py-[13px] text-black font-semibold text-[0.875rem] mb-9">
              Sign Up As
            </Link>
          </div>
        </div>


      </header >
    </>
  )
}

export default Header
