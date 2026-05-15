"use client";

import React, { useState } from 'react';
// @ts-ignore
import StaggeredMenu from './StaggeredMenu';
import NavbarLogo from './NavbarLogo';
import { StaggerButton } from '@/components/ui/stagger-button';
import './Navbar.css';

interface NavItem {
  label: string;
  link: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: NavItem[] = [
    { label: 'About', link: '#about' },
    { label: 'Services', link: '#services' },
    { label: 'Work', link: '#work' },
    { label: 'Contact', link: '#contact' },
  ];

  const careerItem: NavItem = { label: 'Careers', link: '#careers' };

  // Cast to any to bypass incorrect prop inference from the .jsx file
  const StaggeredMenuClient = StaggeredMenu as any;

  return (
    <div className={`navbar-container ${isMenuOpen ? 'menu-open' : ''}`}>
      {/* Desktop Navigation */}
      <nav className="desktop-navbar">
        <div className="nav-left">
          {menuItems.map((item) => (
            <StaggerButton
              key={item.label}
              asChild
              direction="up"
              variant="ghost"
              staggerDuration={0.7}
              staggerDelay={0}
              size={"lg"}
              text={item.label}
              className="nav-link !bg-transparent rounded-[12px] hover:!bg-white/10 hover:!text-white hover:!opacity-100 !px-2"
            >
              <a href={item.link} />
            </StaggerButton>
          ))}
        </div>

        <div className="navbar-logo-wrapper">
          <NavbarLogo isHidden={isMenuOpen} />
        </div>

        <div className="nav-right">
          <StaggerButton
            asChild
            direction="up"
            variant="ghost"
            staggerDuration={0.7}
            staggerDelay={0}
            size={"lg"}
            text={careerItem.label}
            className="nav-link !bg-transparent rounded-[12px] hover:!bg-white/10 hover:!text-white hover:!opacity-100 !px-2"
          >
            <a href={careerItem.link} />
          </StaggerButton>
        </div>
      </nav>

      {/* Mobile Navigation - Using the provided UI Component */}
      <div className="mobile-navbar">
        <div className="mobile-header">
          <div className="navbar-logo-wrapper">
            <NavbarLogo isHidden={isMenuOpen} />
          </div>

          <div className="mobile-menu-wrapper">
            <StaggeredMenuClient
              items={[...menuItems, careerItem]}
              colors={['#0f0f0f', '#1a1a1a', '#222']}
              accentColor="#A57A2A"
              isFixed={true}
              logoUrl="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              onMenuOpen={() => setIsMenuOpen(true)}
              onMenuClose={() => setIsMenuOpen(false)}
              socialItems={[
                { label: 'Instagram', link: 'https://www.instagram.com/macenza.ai/' },
                { label: 'LinkedIn', link: 'https://in.linkedin.com/company/macenza' },
                { label: 'Github', link: 'https://github.com/macenza' },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
