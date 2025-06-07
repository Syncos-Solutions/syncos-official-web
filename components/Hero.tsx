'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { ArrowRight, Play, Code, Smartphone, Globe, Monitor, TrendingUp, Zap, Star, Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  const [animationType, setAnimationType] = useState(0);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const { theme, resolvedTheme } = useTheme();

  // Individual company colors - NO MIXING!
  const individualColors = ['#25bdbe', '#8dc63f', '#f7941e', '#fdb913'];
  
  // 10 different animation types for different users
  const animations = [
    'floating-cubes',
    'particle-wave', 
    'geometric-morph',
    'code-rain',
    'neural-network',
    'holographic-grid',
    'liquid-metal',
    'data-stream',
    'quantum-field',
    'cyber-matrix'
  ];

  // Safe theme check for SSR
  const isDark = mounted && resolvedTheme === 'dark';

  // Generate deterministic values to avoid hydration mismatch
  const generateDeterministicValue = (seed: number, index: number, type: 'position' | 'delay' | 'duration' | 'rotation' | 'scale') => {
    const hash = (seed + index * 1000) % 1000;
    switch (type) {
      case 'position':
        return (hash % 100);
      case 'delay':
        return (hash % 5000) / 1000;
      case 'duration':
        return 3 + (hash % 4000) / 1000;
      case 'rotation':
        return hash % 360;
      case 'scale':
        return 0.5 + (hash % 500) / 1000;
      default:
        return hash % 100;
    }
  };

  useEffect(() => {
    setMounted(true);
    
    // Generate session-based animation type only on client
    if (typeof window !== 'undefined') {
      let sessionAnimation = sessionStorage.getItem('syncosAnimation');
      if (!sessionAnimation) {
        const randomType = Math.floor(Math.random() * 10);
        sessionStorage.setItem('syncosAnimation', randomType.toString());
        setAnimationType(randomType);
      } else {
        setAnimationType(parseInt(sessionAnimation));
      }
    }

    // Mouse tracking for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    // Color rotation for dynamic effects
    const colorInterval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % individualColors.length);
    }, 4000);

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      clearInterval(colorInterval);
    };
  }, []);

  const stats = [
    { number: '150+', label: 'Projects Delivered', color: '#25bdbe', icon: Award },
    { number: '75+', label: 'Happy Clients', color: '#8dc63f', icon: Users },
    { number: '6+', label: 'Years Experience', color: '#f7941e', icon: Clock },
    { number: '24/7', label: 'Support Available', color: '#fdb913', icon: Star }
  ];

  const services = [
    { icon: Globe, name: 'Web Development', color: '#25bdbe', delay: '0s', description: 'Modern & Scalable' },
    { icon: Smartphone, name: 'Mobile Apps', color: '#8dc63f', delay: '0.2s', description: 'Native & Cross-Platform' },
    { icon: Code, name: 'Java Solutions', color: '#f7941e', delay: '0.4s', description: 'Enterprise Grade' },
    { icon: Monitor, name: 'POS Systems', color: '#fdb913', delay: '0.6s', description: 'Real-time Solutions' }
  ];

  const currentColor = individualColors[currentColorIndex];

  if (!mounted) return null;

  return (
    <section 
      ref={heroRef}
      className={`relative min-h-screen overflow-hidden transition-all duration-1000 ${
        mounted 
          ? (isDark 
              ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
              : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
            )
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'
      }`}
    >
      {/* Ultra Advanced Animated Background - Individual Colors Only */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animation Type 0: Floating Cubes - Deterministic Values */}
        {mounted && animationType === 0 && (
          <div className="floating-cubes">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-bounce"
                style={{
                  left: `${generateDeterministicValue(123, i, 'position')}%`,
                  top: `${generateDeterministicValue(456, i, 'position')}%`,
                  animationDelay: `${generateDeterministicValue(789, i, 'delay')}s`,
                  animationDuration: `${generateDeterministicValue(101, i, 'duration')}s`
                }}
              >
                <div 
                  className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transform rotate-45 transition-opacity duration-500 ${
                    mounted 
                      ? (isDark ? 'opacity-15 hover:opacity-30' : 'opacity-10 hover:opacity-25')
                      : 'opacity-10 dark:opacity-15 hover:opacity-25 dark:hover:opacity-30'
                  }`}
                  style={{ 
                    backgroundColor: individualColors[i % 4],
                    transform: `rotate(${generateDeterministicValue(234, i, 'rotation')}deg) scale(${generateDeterministicValue(567, i, 'scale')})`,
                    borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '0%' : '25%'
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Animation Type 1: Particle Wave - Deterministic Values */}
        {mounted && animationType === 1 && (
          <div className="particle-wave relative">
            {[...Array(60)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-pulse"
                style={{
                  left: `${(i * 1.7) % 100}%`,
                  top: `${30 + Math.sin(i * 0.15) * 25 + generateDeterministicValue(890, i, 'position') * 0.4}%`,
                  backgroundColor: individualColors[i % 4],
                  animationDelay: `${i * 0.08}s`,
                  opacity: mounted 
                    ? (isDark ? 0.4 + generateDeterministicValue(111, i, 'scale') * 0.3 : 0.2 + generateDeterministicValue(111, i, 'scale') * 0.3)
                    : 0.2
                }}
              />
            ))}
          </div>
        )}

        {/* Animation Type 2: Geometric Morph - Deterministic Values */}
        {mounted && animationType === 2 && (
          <div className="geometric-morph">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-spin"
                style={{
                  left: `${8 + (i * 8)}%`,
                  top: `${15 + generateDeterministicValue(333, i, 'position') * 0.7}%`,
                  animationDuration: `${12 + generateDeterministicValue(444, i, 'duration') * 2}s`,
                  animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
                }}
              >
                <svg width="50" height="50" viewBox="0 0 50 50" className={mounted ? (isDark ? 'opacity-20' : 'opacity-15') : 'opacity-15 dark:opacity-20'}>
                  {i % 4 === 0 && (
                    <polygon
                      points="25,5 45,40 5,40"
                      fill={individualColors[0]}
                      transform={`rotate(${i * 30} 25 25)`}
                    />
                  )}
                  {i % 4 === 1 && (
                    <circle
                      cx="25"
                      cy="25"
                      r="15"
                      fill={individualColors[1]}
                    />
                  )}
                  {i % 4 === 2 && (
                    <rect
                      x="10"
                      y="10"
                      width="30"
                      height="30"
                      fill={individualColors[2]}
                      transform={`rotate(${i * 45} 25 25)`}
                    />
                  )}
                  {i % 4 === 3 && (
                    <polygon
                      points="25,10 35,30 15,30"
                      fill={individualColors[3]}
                      transform={`rotate(${i * 60} 25 25)`}
                    />
                  )}
                </svg>
              </div>
            ))}
          </div>
        )}

        {/* Animation Type 3: Code Rain - Deterministic Values */}
        {mounted && animationType === 3 && (
          <div className="code-rain">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute text-xs sm:text-sm font-mono animate-bounce ${
                  mounted 
                    ? (isDark ? 'opacity-25' : 'opacity-20')
                    : 'opacity-20 dark:opacity-25'
                }`}
                style={{
                  left: `${i * 5}%`,
                  top: `${10 + generateDeterministicValue(666, i, 'position') * 0.8}%`,
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: '4s',
                  color: individualColors[i % 4]
                }}
              >
                {['</>', 'fn()', '{}', 'React', 'Next', 'TS', 'API', 'DB'][i % 8]}
              </div>
            ))}
          </div>
        )}

        {/* Animation Type 4: Neural Network - Deterministic Values */}
        {mounted && animationType === 4 && (
          <div className="neural-network">
            <svg className={`absolute inset-0 w-full h-full ${
              mounted 
                ? (isDark ? 'opacity-15' : 'opacity-10')
                : 'opacity-10 dark:opacity-15'
            }`}>
              {[...Array(40)].map((_, i) => (
                <g key={i}>
                  <circle
                    cx={`${generateDeterministicValue(777, i, 'position')}%`}
                    cy={`${generateDeterministicValue(888, i, 'position')}%`}
                    r="4"
                    fill={individualColors[i % 4]}
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                  {i > 0 && i % 5 === 0 && (
                    <line
                      x1={`${generateDeterministicValue(999, i, 'position')}%`}
                      y1={`${generateDeterministicValue(111, i + 1, 'position')}%`}
                      x2={`${generateDeterministicValue(222, i + 2, 'position')}%`}
                      y2={`${generateDeterministicValue(333, i + 3, 'position')}%`}
                      stroke={individualColors[Math.floor(i/5) % 4]}
                      strokeWidth="1"
                      opacity="0.4"
                      className="animate-pulse"
                    />
                  )}
                </g>
              ))}
            </svg>
          </div>
        )}

        {/* Animation Type 5: Holographic Grid - Deterministic Values */}
        {mounted && animationType === 5 && (
          <div className="holographic-grid">
            <div className={`absolute inset-0 ${
              mounted 
                ? (isDark ? 'opacity-12' : 'opacity-8')
                : 'opacity-8 dark:opacity-12'
            }`}>
              <div className="grid grid-cols-8 sm:grid-cols-12 grid-rows-6 sm:grid-rows-8 h-full gap-2 sm:gap-4 p-4 sm:p-8">
                {[...Array(96)].map((_, i) => (
                  <div
                    key={i}
                    className="border-2 animate-pulse rounded-sm"
                    style={{
                      borderColor: individualColors[i % 4],
                      animationDelay: `${(i * 0.03) % 4}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Animation Types 6-9: Advanced Individual Color Patterns - Deterministic Values */}
        {mounted && animationType >= 6 && (
          <div className="advanced-animation">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-ping"
                style={{
                  left: `${generateDeterministicValue(555, i, 'position')}%`,
                  top: `${generateDeterministicValue(666, i, 'position')}%`,
                  animationDelay: `${generateDeterministicValue(777, i, 'delay')}s`,
                  animationDuration: '3s'
                }}
              >
                <div
                  className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full"
                  style={{
                    backgroundColor: individualColors[i % 4],
                    opacity: mounted 
                      ? (isDark ? 0.25 : 0.15)
                      : 0.15
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Dynamic Mouse Interaction - Current Color Only - SSR Safe */}
        {mounted && (
          <div
            className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full pointer-events-none transition-all duration-700"
            style={{
              left: `${mousePosition.x * 100}%`,
              top: `${mousePosition.y * 100}%`,
              transform: 'translate(-50%, -50%)',
              background: mounted 
                ? `radial-gradient(circle, ${currentColor}${isDark ? '20' : '10'} 0%, transparent 70%)`
                : `radial-gradient(circle, ${currentColor}10 0%, transparent 70%)`
            }}
          />
        )}

        {/* Theme-aware decorative elements */}
        {mounted && (
          <>
            <div className={`absolute top-20 right-20 w-32 h-32 rounded-full ${isDark ? 'opacity-5' : 'opacity-3'} animate-pulse`}
                 style={{ backgroundColor: individualColors[0] }} />
            <div className={`absolute bottom-32 left-16 w-24 h-24 rounded-full ${isDark ? 'opacity-5' : 'opacity-3'} animate-bounce`}
                 style={{ backgroundColor: individualColors[1], animationDelay: '1s' }} />
          </>
        )}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Innovation Badge */}
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 transition-all duration-500 hover:scale-105"
                 style={{ 
                   backgroundColor: `${currentColor}10`,
                   borderColor: `${currentColor}30`
                 }}>
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" style={{ color: currentColor }} />
              <span className="text-sm sm:text-base font-bold" style={{ color: currentColor }}>
                Software Innovation Hub
              </span>
            </div>

            {/* Main Heading - Theme Aware */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className={`block transition-colors duration-500 ${
                  mounted 
                    ? (isDark ? 'text-white' : 'text-gray-900')
                    : 'text-gray-900 dark:text-white'
                }`}>
                  Transform Your
                </span>
                <span 
                  className="block font-black transition-colors duration-1000"
                  style={{ color: currentColor }}
                >
                  Digital Vision
                </span>
                <span className={`block transition-colors duration-500 ${
                  mounted 
                    ? (isDark ? 'text-white' : 'text-gray-900')
                    : 'text-gray-900 dark:text-white'
                }`}>
                  Into Reality
                </span>
              </h1>
              <p className={`text-lg sm:text-xl lg:text-2xl max-w-2xl leading-relaxed transition-colors duration-500 ${
                mounted 
                  ? (isDark ? 'text-gray-300' : 'text-gray-600')
                  : 'text-gray-600 dark:text-gray-300'
              }`}>
                We craft revolutionary software solutions that scale businesses globally. 
                From web applications to mobile apps, we turn your innovative ideas into powerful digital experiences.
              </p>
            </div>

            {/* CTA Buttons - Individual Colors */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-bold text-white rounded-xl sm:rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden"
                style={{ backgroundColor: individualColors[0] }}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <span className="relative z-10 text-base sm:text-lg">Start Your Project</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/portfolio"
                className={`group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 font-bold rounded-xl sm:rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500 ${
                  mounted 
                    ? (isDark 
                        ? 'bg-gray-800 border-gray-600 text-white hover:border-[#8dc63f] hover:bg-gray-700' 
                        : 'bg-white border-gray-300 text-gray-900 hover:border-[#8dc63f] hover:bg-gray-50'
                      )
                    : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-[#8dc63f] hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 mr-2" style={{ color: individualColors[1] }} />
                <span className="text-base sm:text-lg">View Our Work</span>
              </Link>
            </div>

            {/* Enhanced Stats - Individual Colors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className={`text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-500 hover:scale-105 ${
                    mounted 
                      ? (isDark ? 'bg-gray-800/50' : 'bg-white/50')
                      : 'bg-white/50 dark:bg-gray-800/50'
                  } backdrop-blur-sm shadow-lg hover:shadow-xl`}>
                    <Icon 
                      className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3" 
                      style={{ color: stat.color }} 
                    />
                    <div 
                      className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1 sm:mb-2"
                      style={{ color: stat.color }}
                    >
                      {stat.number}
                    </div>
                    <div className={`text-xs sm:text-sm font-semibold ${
                      mounted 
                        ? (isDark ? 'text-gray-400' : 'text-gray-600')
                        : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Enhanced Services Showcase */}
          <div className="relative mt-8 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className={`group relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl border transform hover:scale-105 transition-all duration-700 ${
                      mounted 
                        ? (isDark 
                            ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                            : 'bg-white border-gray-200 hover:border-gray-300'
                          )
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                    style={{ 
                      animationDelay: service.delay,
                      animationName: 'fadeInUp',
                      animationDuration: '1s',
                      animationFillMode: 'forwards',
                      opacity: 0,
                      transform: 'translateY(30px)'
                    }}
                  >
                    {/* Individual Color Background Effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-5 rounded-2xl sm:rounded-3xl transition-opacity duration-500"
                      style={{ backgroundColor: service.color }}
                    />
                    
                    <div className="relative z-10">
                      <div 
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                        style={{ backgroundColor: `${service.color}15` }}
                      >
                        <Icon 
                          className="w-6 h-6 sm:w-8 sm:h-8"
                          style={{ color: service.color }}
                        />
                      </div>
                      <h3 className={`font-black text-lg sm:text-xl mb-1 sm:mb-2 transition-colors duration-300 ${
                        mounted 
                          ? (isDark ? 'text-white group-hover:text-gray-100' : 'text-gray-900 group-hover:text-gray-800')
                          : 'text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100'
                      }`}>
                        {service.name}
                      </h3>
                      <p className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                        mounted 
                          ? (isDark ? 'text-gray-400' : 'text-gray-600')
                          : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {service.description}
                      </p>
                      <div 
                        className="w-full h-1 mt-3 sm:mt-4 rounded-full transition-all duration-500 group-hover:h-2"
                        style={{ backgroundColor: `${service.color}30` }}
                      >
                        <div 
                          className="h-full rounded-full transition-all duration-1000 group-hover:w-full"
                          style={{ 
                            backgroundColor: service.color,
                            width: '60%'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Floating Elements - Individual Colors */}
            <div 
              className="absolute -top-6 -right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full animate-bounce shadow-xl"
              style={{ backgroundColor: `${individualColors[3]}20`, border: `3px solid ${individualColors[3]}` }}
            />
            <div 
              className="absolute -bottom-6 -left-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full animate-pulse shadow-xl"
              style={{ backgroundColor: `${individualColors[1]}20`, border: `3px solid ${individualColors[1]}` }}
            />
          </div>
        </div>
      </div>

      {/* Theme-aware bottom gradient */}
      <div className={`absolute bottom-0 left-0 right-0 h-24 sm:h-32 ${
        mounted 
          ? (isDark 
              ? 'bg-gradient-to-t from-gray-900 to-transparent' 
              : 'bg-gradient-to-t from-white to-transparent'
            )
          : 'bg-gradient-to-t from-white dark:from-gray-900 to-transparent'
      }`} />

      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;