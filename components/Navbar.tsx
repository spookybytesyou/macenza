"use client";

import React from 'react';
// @ts-ignore
import StaggeredMenu from './StaggeredMenu';
import NavbarLogo from './NavbarLogo';
import './Navbar.css';

interface NavItem {
  label: string;
  link: string;
}

const Navbar = () => {
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
    <div className="navbar-container">
      {/* Desktop Navigation */}
      <nav className="desktop-navbar">
        <div className="nav-left">
          {menuItems.map((item) => (
            <a key={item.label} href={item.link} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <NavbarLogo />

        <div className="nav-right">
          <a href={careerItem.link} className="nav-link">
            {careerItem.label}
          </a>
        </div>
      </nav>

      {/* Mobile Navigation - Using the provided UI Component */}
      <div className="mobile-navbar">
        <div className="mobile-header">
          {/* Spacer to balance the menu on the right */}
          <div className="mobile-spacer"></div>

          <NavbarLogo />

          <div className="mobile-menu-wrapper">
            <StaggeredMenuClient
              items={[...menuItems, careerItem]}
              colors={['#0f0f0f', '#1a1a1a', '#222']}
              accentColor="#fff"
              isFixed={true}
              logoUrl="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
