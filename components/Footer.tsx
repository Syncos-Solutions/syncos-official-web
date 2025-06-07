'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Globe, Smartphone, Code, Monitor, TrendingUp, Mail, Phone, MapPin,
  Facebook, Twitter, Instagram, Linkedin, Github, Send, ArrowRight,
  Award, Users, Clock, Shield, Zap, Heart, ExternalLink, ChevronUp
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  const services = [
    { name: 'Web Development', href: '/services/web', icon: Globe, color: '#25bdbe' },
    { name: 'Mobile Apps', href: '/services/mobile', icon: Smartphone, color: '#8dc63f' },
    { name: 'Java Solutions', href: '/services/java', icon: Code, color: '#f7941e' },
    { name: 'POS Systems', href: '/services/pos', icon: Monitor, color: '#fdb913' },
    { name: 'SEO Services', href: '/services/seo', icon: TrendingUp, color: '#25bdbe' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about', color: '#25bdbe' },
    { name: 'Our Team', href: '/team', color: '#8dc63f' },
    { name: 'Portfolio', href: '/portfolio', color: '#f7941e' },
    { name: 'Case Studies', href: '/case-studies', color: '#fdb913' },
    { name: 'Testimonials', href: '/testimonials', color: '#25bdbe' },
    { name: 'Blog', href: '/blog', color: '#8dc63f' },
    { name: 'Careers', href: '/careers', color: '#f7941e' },
    { name: 'Contact', href: '/contact', color: '#fdb913' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook, color: '#25bdbe' },
    { name: 'Twitter', href: '#', icon: Twitter, color: '#8dc63f' },
    { name: 'Instagram', href: '#', icon: Instagram, color: '#f7941e' },
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: '#fdb913' },
    { name: 'GitHub', href: '#', icon: Github, color: '#25bdbe' }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: Award, color: '#25bdbe' },
    { number: '50+', label: 'Happy Clients', icon: Users, color: '#8dc63f' },
    { number: '5+', label: 'Years Experience', icon: Clock, color: '#f7941e' },
    { number: '24/7', label: 'Support', icon: Shield, color: '#fdb913' }
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Java', 'Spring Boot',
    'React Native', 'Flutter', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: ['#25bdbe', '#8dc63f', '#f7941e', '#fdb913'][i % 4]
                }}
              />
            </div>
          ))}
        </div>

        {/* Geometric Patterns */}
        <div className="absolute top-0 left-0 w-full h-32 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 120">
            <defs>
              <linearGradient id="footerGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#25bdbe" />
                <stop offset="25%" stopColor="#8dc63f" />
                <stop offset="50%" stopColor="#f7941e" />
                <stop offset="75%" stopColor="#fdb913" />
                <stop offset="100%" stopColor="#25bdbe" />
              </linearGradient>
            </defs>
            <path 
              d="M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z" 
              fill="url(#footerGrad1)"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-gray-700">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black mb-4">
              <span className="text-[#25bdbe]">Stay</span>{' '}
              <span className="text-[#8dc63f]">Connected</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get the latest updates on technology trends, project insights, and exclusive offers.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-600 rounded-l-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25bdbe] focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#25bdbe] hover:bg-[#1e9ba0] rounded-r-xl font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105 group"
              >
                {subscribed ? (
                  <span className="flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-red-400" />
                    Thanks!
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Subscribe
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Logo & Description */}
              <div>
                <Link href="/" className="flex items-center space-x-3 mb-6 group">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#25bdbe] via-[#8dc63f] to-[#f7941e] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-black text-2xl">S</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#fdb913] rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-white">
                      Syncos Solutions
                    </h2>
                    <p className="text-sm text-gray-400">Software Innovation Hub</p>
                  </div>
                </Link>

                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  We are a cutting-edge software development company specializing in web applications, 
                  mobile apps, enterprise solutions, and digital transformation services. 
                  Our mission is to turn your innovative ideas into powerful digital realities.
                </p>

                {/* Featured Project */}
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-[#25bdbe] transition-colors duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <Zap className="w-6 h-6 text-[#fdb913]" />
                    <h4 className="font-bold text-white">Featured Project</h4>
                  </div>
                  <Link 
                    href="https://mihithlankatours.com" 
                    target="_blank"
                    className="group flex items-center justify-between"
                  >
                    <div>
                      <h5 className="font-bold text-[#25bdbe] group-hover:text-[#8dc63f] transition-colors">
                        Mihith Lanka Tours
                      </h5>
                      <p className="text-sm text-gray-400">Travel & Tourism Platform</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#25bdbe] group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="font-black text-xl text-white mb-6">Contact Information</h4>
                
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-[#25bdbe] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Email</p>
                    <p className="text-gray-300">hello@syncossolutions.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-[#8dc63f] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Phone</p>
                    <p className="text-gray-300">+94 (0) 77 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-[#f7941e] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Location</p>
                    <p className="text-gray-300">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-black text-xl text-white mb-8">Our Services</h4>
              <ul className="space-y-4">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <li key={index}>
                      <Link 
                        href={service.href}
                        className="group flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300"
                      >
                        <Icon 
                          className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                          style={{ color: service.color }}
                        />
                        <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
                          {service.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-black text-xl text-white mb-8">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="group flex items-center justify-between hover:translate-x-2 transition-transform duration-300"
                    >
                      <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
                        {link.name}
                      </span>
                      <ArrowRight 
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                        style={{ color: link.color }}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats & Technologies */}
            <div>
              <h4 className="font-black text-xl text-white mb-8">Our Impact</h4>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={index}
                      className="text-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300 group cursor-pointer"
                    >
                      <Icon 
                        className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300"
                        style={{ color: stat.color }}
                      />
                      <div className="text-2xl font-black" style={{ color: stat.color }}>
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-400 font-semibold">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Technologies */}
              <div>
                <h5 className="font-bold text-white mb-4">Technologies We Use</h5>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-bold bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 hover:text-white transition-all duration-300 cursor-pointer"
                      style={{
                        borderLeft: `3px solid ${['#25bdbe', '#8dc63f', '#f7941e', '#fdb913'][index % 4]}`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400">
                © {currentYear} <span className="font-bold text-[#25bdbe]">Syncos Solutions</span>. 
                All rights reserved. Made with{' '}
                <Heart className="w-4 h-4 inline text-red-400 animate-pulse" />{' '}
                in Sri Lanka.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="group w-12 h-12 rounded-xl flex items-center justify-center bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  >
                    <Icon 
                      className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300"
                      style={{
                        color: 'inherit'
                      }}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-[#25bdbe] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#8dc63f] transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-[#f7941e] transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-[#25bdbe] hover:bg-[#8dc63f] rounded-full flex items-center justify-center text-white shadow-2xl transform hover:scale-110 transition-all duration-300 z-50 group"
        >
          <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/94771234567"
        target="_blank"
        className="fixed bottom-8 left-8 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center text-white shadow-2xl transform hover:scale-110 transition-all duration-300 z-50 group animate-pulse"
      >
        <svg 
          className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
        </svg>
      </Link>
    </footer>
  );
};

export default Footer;