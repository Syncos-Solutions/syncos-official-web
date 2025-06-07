'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Code, Smartphone, Globe, Monitor, Search, TrendingUp, Zap, Shield, Clock, Users, Award, Lightbulb } from 'lucide-react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const mainFeatures = [
    {
      icon: Globe,
      title: 'Web Application Development',
      description: 'Custom web applications built with cutting-edge technologies like React, Next.js, and modern frameworks.',
      color: '#25bdbe',
      gradient: 'from-[#25bdbe] to-[#1e9ba0]',
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js'],
      projects: '40+ Projects'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
      color: '#8dc63f',
      gradient: 'from-[#8dc63f] to-[#7bb135]',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      projects: '25+ Apps'
    },
    {
      icon: Code,
      title: 'Java Enterprise Solutions',
      description: 'Robust enterprise applications and backend systems using Java, Spring Boot, and microservices architecture.',
      color: '#f7941e',
      gradient: 'from-[#f7941e] to-[#e8851a]',
      technologies: ['Java', 'Spring Boot', 'Microservices', 'REST APIs'],
      projects: '30+ Systems'
    },
    {
      icon: Monitor,
      title: 'POS & Monitoring Systems',
      description: 'Point-of-sale systems and real-time monitoring solutions for businesses of all sizes.',
      color: '#fdb913',
      gradient: 'from-[#fdb913] to-[#e5a40f]',
      technologies: ['Real-time', 'Analytics', 'Cloud', 'IoT'],
      projects: '15+ Solutions'
    },
    {
      icon: TrendingUp,
      title: 'SEO & Digital Marketing',
      description: 'Complete SEO optimization and digital marketing strategies to boost your online presence.',
      color: '#25bdbe',
      gradient: 'from-[#25bdbe] to-[#8dc63f]',
      technologies: ['SEO', 'Analytics', 'Content', 'Social Media'],
      projects: '50+ Campaigns'
    }
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: 'Secure & Scalable',
      description: 'Enterprise-grade security with scalable architecture',
      color: '#25bdbe'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance',
      color: '#8dc63f'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced developers and designers',
      color: '#f7941e'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control processes',
      color: '#fdb913'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % mainFeatures.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#25bdbe]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8dc63f]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#f7941e]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#25bdbe]/10 to-[#8dc63f]/10 rounded-full border border-[#25bdbe]/20 mb-6">
            <Lightbulb className="w-4 h-4 text-[#25bdbe] mr-2" />
            <span className="text-sm font-medium text-[#25bdbe]">Our Expertise</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="block">Comprehensive</span>
            <span className="bg-gradient-to-r from-[#25bdbe] via-[#8dc63f] to-[#f7941e] bg-clip-text text-transparent">
              Software Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we deliver end-to-end software solutions that drive business growth and digital transformation.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Feature Cards */}
          <div className="space-y-6">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === index;
              
              return (
                <div
                  key={index}
                  className={`group relative p-8 rounded-2xl cursor-pointer transition-all duration-500 ${
                    isActive 
                      ? 'bg-white dark:bg-gray-800 shadow-2xl border-2 scale-105' 
                      : 'bg-white/50 dark:bg-gray-800/50 shadow-lg border hover:shadow-xl hover:scale-102'
                  }`}
                  style={{
                    borderColor: isActive ? feature.color : 'transparent',
                    animation: inView ? `fadeInLeft 0.8s ease-out ${index * 0.2}s forwards` : 'none',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateX(0)' : 'translateX(-50px)'
                  }}
                  onClick={() => setActiveFeature(index)}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <div 
                      className="absolute left-0 top-8 bottom-8 w-1 rounded-full"
                      style={{ backgroundColor: feature.color }}
                    />
                  )}

                  <div className="flex items-start space-x-6">
                    <div 
                      className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transform transition-all duration-300 ${
                        isActive ? 'scale-110' : 'group-hover:scale-105'
                      }`}
                      style={{ 
                        backgroundColor: `${feature.color}15`,
                        boxShadow: isActive ? `0 20px 40px ${feature.color}30` : 'none'
                      }}
                    >
                      <Icon 
                        className="w-8 h-8 transition-all duration-300"
                        style={{ color: feature.color }}
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {feature.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-sm font-medium rounded-full transition-colors duration-300"
                            style={{
                              backgroundColor: isActive ? `${feature.color}20` : `${feature.color}10`,
                              color: feature.color
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Project Count */}
                      <div className="flex items-center">
                        <div 
                          className="w-2 h-2 rounded-full mr-2"
                          style={{ backgroundColor: feature.color }}
                        />
                        <span className="text-sm font-medium" style={{ color: feature.color }}>
                          {feature.projects}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Preview */}
          <div className="relative">
            <div className="sticky top-32">
              {/* Main Preview Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, ${mainFeatures[activeFeature].color} 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${mainFeatures[activeFeature].color}15` }}
                    >
                      {React.createElement(mainFeatures[activeFeature].icon, {
                        className: "w-10 h-10",
                        style: { color: mainFeatures[activeFeature].color }
                      })}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold" style={{ color: mainFeatures[activeFeature].color }}>
                        {activeFeature + 1}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        of {mainFeatures.length}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {mainFeatures[activeFeature].title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                    {mainFeatures[activeFeature].description}
                  </p>

                  {/* Progress Indicators */}
                  <div className="flex space-x-2">
                    {mainFeatures.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === activeFeature ? 'flex-1' : 'w-2'
                        }`}
                        style={{
                          backgroundColor: index === activeFeature 
                            ? mainFeatures[activeFeature].color
                            : `${mainFeatures[activeFeature].color}30`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Feature Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {additionalFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  
                  return (
                    <div
                      key={index}
                      className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300"
                    >
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${feature.color}15` }}
                      >
                        <Icon 
                          className="w-6 h-6"
                          style={{ color: feature.color }}
                        />
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Features;