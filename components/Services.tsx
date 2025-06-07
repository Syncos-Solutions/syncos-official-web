'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  Globe, Smartphone, Code, Monitor, TrendingUp, Search,
  ArrowRight, Check, Star, Users, Clock, Shield,
  Database, Cloud, Cpu, Palette, Zap, Target, Layers,
  ChevronRight, Play, Award, TrendingDown
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const services = [
    {
      icon: Globe,
      title: 'Web Application Development',
      shortDesc: 'Enterprise-grade web solutions with cutting-edge architecture',
      longDesc: 'Revolutionary web applications built with micro-frontends, server-side rendering, and progressive web app capabilities. We leverage advanced patterns like JAMstack and headless CMS.',
      color: '#25bdbe',
      accentColor: '#1e9ba0',
      lightColor: '#e0f7fa',
      features: [
        'Micro-Frontend Architecture',
        'Progressive Web Apps (PWA)',
        'Server-Side Rendering',
        'Headless CMS Integration',
        'Advanced Caching Strategies',
        'WebAssembly Optimization',
        'Real-time Collaboration',
        'AI-Powered Analytics'
      ],
      technologies: ['Next.js 14', 'React 18', 'TypeScript', 'Prisma', 'tRPC', 'Vercel'],
      price: '$5,000',
      period: 'per project',
      deliveryTime: '3-12 weeks',
      projects: 40,
      rating: 4.9,
      complexity: 'Enterprise',
      guarantee: '6 months'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      shortDesc: 'Native performance with cross-platform efficiency',
      longDesc: 'Ultra-performant mobile applications using native modules, custom animations, and platform-specific optimizations. Advanced features like AR/VR integration and IoT connectivity.',
      color: '#8dc63f',
      accentColor: '#7bb135',
      lightColor: '#f1f8e9',
      features: [
        'Native Module Development',
        'AR/VR Integration',
        'Biometric Authentication',
        'Offline-First Architecture',
        'IoT Device Connectivity',
        'Machine Learning Integration',
        'Advanced Animations',
        'Push Notification Engine'
      ],
      technologies: ['React Native', 'Flutter', 'Swift UI', 'Kotlin', 'ARCore', 'ARKit'],
      price: '$8,000',
      period: 'per platform',
      deliveryTime: '4-16 weeks',
      projects: 25,
      rating: 4.8,
      complexity: 'Advanced',
      guarantee: '12 months'
    },
    {
      icon: Code,
      title: 'Java Enterprise Solutions',
      shortDesc: 'Scalable microservices with cloud-native architecture',
      longDesc: 'Enterprise-grade Java solutions with event-driven architecture, distributed systems, and cloud-native deployment. Advanced monitoring, logging, and security implementations.',
      color: '#f7941e',
      accentColor: '#e8851a',
      lightColor: '#fff3e0',
      features: [
        'Event-Driven Architecture',
        'Distributed System Design',
        'Container Orchestration',
        'Advanced Security Protocols',
        'Performance Monitoring',
        'Auto-Scaling Solutions',
        'API Gateway Implementation',
        'Data Pipeline Automation'
      ],
      technologies: ['Spring Boot 3', 'Kubernetes', 'Apache Kafka', 'Elasticsearch', 'Redis', 'Docker'],
      price: '$12,000',
      period: 'per service',
      deliveryTime: '6-20 weeks',
      projects: 30,
      rating: 4.9,
      complexity: 'Expert',
      guarantee: '18 months'
    },
    {
      icon: Monitor,
      title: 'POS & Monitoring Systems',
      shortDesc: 'Real-time analytics with intelligent automation',
      longDesc: 'Advanced POS systems with real-time inventory management, predictive analytics, and automated reporting. Integration with multiple payment gateways and loyalty programs.',
      color: '#fdb913',
      accentColor: '#e5a40f',
      lightColor: '#fffde7',
      features: [
        'Real-time Inventory Sync',
        'Predictive Analytics',
        'Multi-Gateway Payments',
        'Loyalty Program Engine',
        'Automated Reporting',
        'Cloud Synchronization',
        'Advanced Security',
        'Multi-location Support'
      ],
      technologies: ['Node.js', 'Socket.io', 'Redis', 'Chart.js', 'Stripe', 'PayPal'],
      price: '$6,000',
      period: 'per location',
      deliveryTime: '4-12 weeks',
      projects: 15,
      rating: 4.7,
      complexity: 'Professional',
      guarantee: '9 months'
    },
    {
      icon: TrendingUp,
      title: 'SEO & Digital Marketing',
      shortDesc: 'AI-driven marketing with advanced analytics',
      longDesc: 'Comprehensive digital marketing strategies powered by AI and machine learning. Advanced SEO techniques, content optimization, and performance tracking with predictive insights.',
      color: '#25bdbe',
      accentColor: '#1e9ba0',
      lightColor: '#e0f7fa',
      features: [
        'AI-Powered Content Strategy',
        'Advanced Keyword Analysis',
        'Competitor Intelligence',
        'Performance Prediction',
        'Automated Optimization',
        'Multi-Channel Campaigns',
        'ROI Tracking',
        'Voice Search Optimization'
      ],
      technologies: ['Google Analytics 4', 'SEMrush', 'Ahrefs', 'HubSpot', 'Zapier', 'Tableau'],
      price: '$2,500',
      period: 'per month',
      deliveryTime: '2-6 months',
      projects: 50,
      rating: 4.8,
      complexity: 'Strategic',
      guarantee: '3 months'
    },
    {
      icon: Database,
      title: 'Cloud Infrastructure',
      shortDesc: 'Scalable cloud architecture with DevOps automation',
      longDesc: 'Modern cloud infrastructure with auto-scaling, disaster recovery, and CI/CD pipelines. Advanced monitoring, logging, and security implementations for enterprise applications.',
      color: '#8dc63f',
      accentColor: '#7bb135',
      lightColor: '#f1f8e9',
      features: [
        'Auto-Scaling Infrastructure',
        'Disaster Recovery Systems',
        'CI/CD Pipeline Automation',
        'Advanced Monitoring',
        'Security Compliance',
        'Cost Optimization',
        'Multi-Cloud Strategy',
        'Infrastructure as Code'
      ],
      technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitLab CI', 'Prometheus'],
      price: '$4,000',
      period: 'setup + monthly',
      deliveryTime: '2-8 weeks',
      projects: 35,
      rating: 4.9,
      complexity: 'Expert',
      guarantee: '12 months'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Strategic Discovery',
      description: 'Deep-dive analysis of your business requirements, market research, and technical architecture planning',
      icon: Target,
      color: '#25bdbe',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Advanced Design',
      description: 'UI/UX design with user journey mapping, prototyping, and advanced interaction design',
      icon: Palette,
      color: '#8dc63f',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Agile Development',
      description: 'Sprint-based development with continuous integration, automated testing, and code reviews',
      icon: Code,
      color: '#f7941e',
      duration: '4-12 weeks'
    },
    {
      step: '04',
      title: 'Cloud Deployment',
      description: 'Production deployment with monitoring, scaling, and ongoing maintenance support',
      icon: Zap,
      color: '#fdb913',
      duration: 'Ongoing'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Delivered', color: '#25bdbe', icon: Award },
    { number: '98%', label: 'Client Satisfaction', color: '#8dc63f', icon: Star },
    { number: '24/7', label: 'Support Available', color: '#f7941e', icon: Clock },
    { number: '5+', label: 'Years Experience', color: '#fdb913', icon: TrendingUp }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Advanced Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div
              className="w-12 h-12 transform rotate-45"
              style={{
                backgroundColor: ['#25bdbe', '#8dc63f', '#f7941e', '#fdb913'][i % 4],
                borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '0%' : '25%',
                transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()})`
              }}
            />
          </div>
        ))}

        {/* Interactive Mouse Trail */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-5 pointer-events-none transition-all duration-700"
          style={{
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, ${['#25bdbe', '#8dc63f', '#f7941e', '#fdb913'][currentAnimation]}40 0%, transparent 70%)`
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(${['#25bdbe', '#8dc63f', '#f7941e', '#fdb913'][currentAnimation]}40 1px, transparent 1px), linear-gradient(90deg, ${['#25bdbe', '#8dc63f', '#f7941e', '#fdb913'][currentAnimation]}40 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Ultra Advanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-xl border border-gray-100 dark:border-gray-700 mb-8">
            <div className="flex items-center space-x-2 mr-3">
              <div className="w-3 h-3 rounded-full bg-[#25bdbe] animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-[#8dc63f] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#f7941e] animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            <Shield className="w-5 h-5 text-[#25bdbe] mr-2" />
            <span className="text-sm font-semibold text-[#25bdbe] uppercase tracking-wider">Premium Services</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
            <span className="block">Next-Generation</span>
            <span className="block">
              <span className="text-[#25bdbe]">Software</span>{' '}
              <span className="text-[#8dc63f]">Solutions</span>
            </span>
          </h2>
          
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Revolutionary software development services that transform businesses through 
            cutting-edge technology and innovative architectural patterns.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transform hover:scale-110 transition-all duration-500"
                  style={{
                    animation: inView ? `slideInUp 0.8s ease-out ${index * 0.2}s forwards` : 'none',
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform duration-300"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: stat.color }} />
                  </div>
                  <div className="text-3xl font-black mb-2" style={{ color: stat.color }}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ultra Advanced Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-700 transform hover:scale-105 overflow-hidden"
                style={{
                  animation: inView ? `fadeInUp 1s ease-out ${index * 0.15}s forwards` : 'none',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(50px)'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Advanced Background Effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div 
                    className="absolute inset-0 opacity-5"
                    style={{ backgroundColor: service.color }}
                  />
                  <div 
                    className="absolute top-0 left-0 w-full h-1"
                    style={{ backgroundColor: service.color }}
                  />
                  <div 
                    className="absolute bottom-0 right-0 w-1 h-full"
                    style={{ backgroundColor: service.color }}
                  />
                </div>

                {/* Floating Icon Animation */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Icon 
                    className="w-24 h-24 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700"
                    style={{ color: service.color }}
                  />
                </div>

                <div className="relative z-10 p-8">
                  {/* Advanced Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div 
                        className="w-20 h-20 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg"
                        style={{ backgroundColor: service.lightColor }}
                      >
                        <Icon 
                          className="w-10 h-10"
                          style={{ color: service.color }}
                        />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                            {service.rating}
                          </span>
                          <span 
                            className="px-2 py-1 text-xs font-bold rounded-full text-white"
                            style={{ backgroundColor: service.color }}
                          >
                            {service.complexity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-current transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-medium">
                    {service.shortDesc}
                  </p>

                  {/* Advanced Features Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {service.features.slice(0, 6).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center group/feature">
                        <div 
                          className="w-2 h-2 rounded-full mr-2 flex-shrink-0 group-hover/feature:scale-125 transition-transform duration-300"
                          style={{ backgroundColor: service.color }}
                        />
                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 group-hover/feature:text-gray-900 dark:group-hover/feature:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-bold rounded-full border-2 transition-all duration-300 hover:scale-105"
                          style={{
                            borderColor: service.color,
                            color: service.color,
                            backgroundColor: isHovered ? `${service.color}15` : 'transparent'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Advanced Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="w-4 h-4 mr-1" style={{ color: service.color }} />
                      </div>
                      <div className="text-lg font-black" style={{ color: service.color }}>
                        {service.projects}+
                      </div>
                      <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                        Projects
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Clock className="w-4 h-4 mr-1" style={{ color: service.color }} />
                      </div>
                      <div className="text-sm font-black" style={{ color: service.color }}>
                        {service.deliveryTime.split('-')[0]}
                      </div>
                      <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                        Weeks Min
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Shield className="w-4 h-4 mr-1" style={{ color: service.color }} />
                      </div>
                      <div className="text-sm font-black" style={{ color: service.color }}>
                        {service.guarantee}
                      </div>
                      <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                        Guarantee
                      </div>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-black" style={{ color: service.color }}>
                        {service.price}
                      </div>
                      <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                        {service.period}
                      </div>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="group/btn relative inline-flex items-center px-6 py-3 rounded-xl text-white font-bold transition-all duration-500 hover:shadow-2xl transform hover:scale-110 overflow-hidden"
                      style={{ backgroundColor: service.color }}
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
                      <span className="relative z-10">Get Started</span>
                      <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>

                {/* Advanced Hover Border Effect */}
                <div 
                  className={`absolute inset-0 rounded-3xl border-4 transition-all duration-500 ${
                    isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                  }`}
                  style={{ borderColor: service.color }}
                />
              </div>
            );
          })}
        </div>

        {/* Ultra Advanced Process Section */}
        <div 
          className="relative bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(249,250,251,0.9) 100%)',
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    backgroundColor: ['#25bdbe', '#8dc63f', '#f7941e', '#fdb913'][i % 4],
                    animationDelay: `${Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
                <span className="text-[#25bdbe]">Development</span>{' '}
                <span className="text-[#8dc63f]">Process</span>
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our proven methodology ensures successful project delivery with maximum efficiency and quality.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                
                return (
                  <div
                    key={index}
                    className="group relative text-center transform hover:scale-105 transition-all duration-500"
                    style={{
                      animation: inView ? `fadeInUp 1s ease-out ${index * 0.3}s forwards` : 'none',
                    }}
                  >
                    {/* Connection Line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-20 left-full w-full h-1 bg-gray-200 dark:bg-gray-700 z-0">
                        <div 
                          className="h-full transition-all duration-1000"
                          style={{ 
                            backgroundColor: step.color,
                            width: inView ? '100%' : '0%',
                            transitionDelay: `${index * 0.5}s`
                          }}
                        />
                      </div>
                    )}

                    <div className="relative z-10">
                      {/* Step Number */}
                      <div 
                        className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
                        style={{ backgroundColor: step.color }}
                      >
                        <span className="text-2xl font-black text-white">
                          {step.step}
                        </span>
                      </div>

                      {/* Icon */}
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300"
                        style={{ backgroundColor: `${step.color}15` }}
                      >
                        <Icon 
                          className="w-8 h-8"
                          style={{ color: step.color }}
                        />
                      </div>

                      {/* Content */}
                      <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                        {step.title}
                      </h4>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      <div 
                        className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-white"
                        style={{ backgroundColor: step.color }}
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;