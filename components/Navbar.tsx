'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, Code, Globe, Smartphone, Monitor, Search, TrendingUp } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Debug logging
  useEffect(() => {
    if (mounted) {
      console.log('Current theme:', theme);
      console.log('Resolved theme:', resolvedTheme);
    }
  }, [theme, resolvedTheme, mounted]);

  const handleThemeToggle = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    console.log('Switching theme from', resolvedTheme, 'to', newTheme);
    setTheme(newTheme);
  };

  const navItems = [
    { name: 'Home', href: '/', icon: Globe },
    { name: 'About', href: '/about', icon: Code },
    { name: 'Services', href: '/services', icon: Monitor },
    { name: 'Blog', href: '/blog', icon: TrendingUp },
    { name: 'Careers', href: '/careers', icon: Smartphone },
    { name: 'Contact', href: '/contact', icon: Search },
  ];

  const services = [
    { name: 'Web Applications', color: 'text-[#25bdbe]' },
    { name: 'Mobile Apps', color: 'text-[#8dc63f]' },
    { name: 'Java Development', color: 'text-[#f7941e]' },
    { name: 'POS Systems', color: 'text-[#fdb913]' },
    { name: 'SEO Services', color: 'text-[#25bdbe]' },
  ];

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
              <div className="hidden sm:block">
                <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse lg:hidden"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-700'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                {/* Company Logo */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/syncos-logo.png" 
                    alt="Syncos Solutions Logo - Software Innovation Hub"
                    className="w-full h-full object-contain"
                    width={56}
                    height={56}
                    style={{
                      filter: 'drop-shadow(0 4px 8px rgba(37, 189, 190, 0.3))'
                    }}
                  />
                </div>
                {/* Animated pulse indicator */}
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#fdb913] rounded-full animate-pulse shadow-lg"></div>
              </div>
              
              {/* Company Name - Responsive Typography */}
              <div className="hidden sm:block">
                <h1 className="text-xl sm:text-2xl lg:text-2xl font-black text-gray-900 dark:text-white group-hover:text-[#25bdbe] transition-colors duration-300">
                  Syncos Solutions
                </h1>
                <p className="text-xs sm:text-sm text-[#25bdbe] dark:text-[#25bdbe] font-medium -mt-1 group-hover:text-[#8dc63f] transition-colors duration-300">
                  Software Innovation Hub
                </p>
              </div>
              
              {/* Mobile-only company initial with logo */}
              <div className="sm:hidden">
                <h1 className="text-lg font-black text-gray-900 dark:text-white group-hover:text-[#25bdbe] transition-colors duration-300">
                  Syncos
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group relative px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-[#25bdbe] transition-colors" />
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-[#25bdbe] font-medium transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <div 
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#25bdbe] to-[#8dc63f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      style={{ width: '100%' }}
                    ></div>
                  </Link>
                );
              })}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Enhanced Theme Toggle */}
              <button
                onClick={handleThemeToggle}
                className="relative p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:scale-105"
                aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <div className="relative w-6 h-6">
                  {/* Sun Icon */}
                  <Sun 
                    className={`absolute inset-0 w-6 h-6 text-[#fdb913] transition-all duration-500 ${
                      resolvedTheme === 'dark' 
                        ? 'rotate-0 scale-100 opacity-100' 
                        : 'rotate-90 scale-0 opacity-0'
                    }`} 
                  />
                  {/* Moon Icon */}
                  <Moon 
                    className={`absolute inset-0 w-6 h-6 text-[#25bdbe] transition-all duration-500 ${
                      resolvedTheme === 'light' 
                        ? 'rotate-0 scale-100 opacity-100' 
                        : '-rotate-90 scale-0 opacity-0'
                    }`} 
                  />
                </div>
                
                {/* Tooltip */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {resolvedTheme === 'dark' ? 'Light mode' : 'Dark mode'}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-100 rotate-45"></div>
                </div>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        
        {/* Mobile Menu Content */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 space-y-6">
            {/* Mobile Logo */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                {/* Mobile Logo Image */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <img 
                    src="/syncos-logo.png" 
                    alt="Syncos Solutions Logo"
                    className="w-full h-full object-contain"
                    width={48}
                    height={48}
                    style={{
                      filter: 'drop-shadow(0 2px 4px rgba(37, 189, 190, 0.3))'
                    }}
                  />
                </div>
                <div>
                  <h2 className="font-black text-gray-900 dark:text-white text-lg">Syncos</h2>
                  <p className="text-xs text-[#25bdbe] font-semibold">Solutions</p>
                </div>
              </div>
              
              {/* Mobile Theme Toggle */}
              <button
                onClick={handleThemeToggle}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {resolvedTheme === 'dark' ? (
                  <Sun className="w-5 h-5 text-[#fdb913]" />
                ) : (
                  <Moon className="w-5 h-5 text-[#25bdbe]" />
                )}
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const colors = ['#25bdbe', '#8dc63f', '#f7941e', '#fdb913'];
                const color = colors[index % colors.length];
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 group"
                  >
                    <Icon 
                      className="w-5 h-5 transition-colors duration-300"
                      style={{ color: color }}
                    />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white font-medium">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Services Preview */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Our Services
              </h3>
              <div className="space-y-2">
                {services.map((service, index) => (
                  <div key={service.name} className="flex items-center space-x-2">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: service.color.replace('text-[', '').replace(']', '') }}
                    />
                    <span className={`text-sm font-medium`} style={{ color: service.color.replace('text-[', '').replace(']', '') }}>
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Ready to start your project?
                </p>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#25bdbe] to-[#8dc63f] text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;