import React, { useRef, useState } from 'react';
import { navigationData } from '@/constants/index';

const Navigation = () => {
  const [activeMainNav, setActiveMainNav] = useState(null);
  const hideDropdownTimer = useRef(null);

  const handleMouseEnter = (mainIndex) => {
    clearTimeout(hideDropdownTimer.current);
    setActiveMainNav(mainIndex);
  };

  const handleMouseLeave = () => {
    hideDropdownTimer.current = setTimeout(() => setActiveMainNav(null), 500);
  };

  return (
    <nav className='py-10 text-[#0B523F] text-[1.4rem] relative'>
      <ul className='flex flex-col'>
        {navigationData.map((mainNavItem, mainIndex) => (
          <div key={mainIndex} className='mb-12 relative'>
            <div className={`flex `}>
              <li
                className='flex items-center flex-col ml-[5rem] text-right '
                onMouseEnter={() => handleMouseEnter(mainIndex)}
                onMouseLeave={handleMouseLeave}
              >
                <a href={mainNavItem.url} className={activeMainNav === mainIndex ? ' ' : ''}>
                  {mainNavItem.label}
                </a>
              </li>
              {activeMainNav === mainIndex && (
                <div className='fixed top-[9.5rem] left-[15rem]  p-4'>
                  {/* Fixed container for subnavigation */}
                  <ul>
                    {mainNavItem.subNavs.map((subNavItem, subIndex) => (
                      <li
                        key={subIndex}
                        className={`mb-10 ml-[4rem] font-light w-[250%] text-[1rem] gap-y-4 flex-col ${
                          subIndex === 0 ? 'items-start' : subIndex === navigationData.length - 1 ? 'items-baseline' : 'items-center'
                        }`}
                      >
                        <a href={subNavItem.url}>{subNavItem.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
