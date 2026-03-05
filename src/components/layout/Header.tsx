"use client"
import React, { useState, useEffect } from 'react';
import  Link  from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [serviceSubmenuOpen, setServiceSubmenuOpen] = useState(false);

    // Navigation items
    const navItems = [
      { name: 'Services', href: '#services', hasSubmenu: true },
      { name: 'Projects', href: '#projects' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '/contact' },
    ];

    // Services submenu items
    const serviceItems = [
      { 
        name: 'Web Development', 
        href: '/services/web-development',
        description: 'Responsive, modern web applications that provide seamless user experiences.'
      },
      { 
        name: 'SEO', 
        href: '/services/seo',
        description: 'Enhance your online visibility and drive organic traffic to your website.'
      },
      { 
        name: 'Digital Marketing', 
        href: '/services/digital-marketing',
        description: 'Strategic marketing campaigns to target your ideal customers and maximize ROI.'
      },
      { 
        name: 'Website Maintenance', 
        href: '/services/website-maintenance',
        description: 'Regular updates and security for optimal website performance.'
      },
      { 
        name: 'Video Animation', 
        href: '/services/video-animation',
        description: 'Create engaging and informative explainer videos for your business.'
      },
      { 
        name: 'Dedicated Developer', 
        href: '/services/dedicated-developer',
        description: 'Hire skilled developers tailored to your project requirements.'
      },
    ];

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleServiceSubmenu = () => {
      setServiceSubmenuOpen(!serviceSubmenuOpen);
    };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
        : 'bg-white/80 backdrop-blur-sm py-4'
    }`}>
      <div className="container max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/vortexnewlogo-Photoroom.png"
              alt="Vortex Solution Logo"
              className="h-auto w-[150px]" 
            />
          </Link>

          {/* Desktop Navigation - Fixed spacing */}
          <nav className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-6">
                {navItems.map((item) => 
                  item.hasSubmenu ? (
                    <NavigationMenuItem key={item.name} className="relative">
                      <NavigationMenuTrigger className="font-semibold text-sm text-[#0F172A] hover:text-[#E7107E] transition-colors duration-200 bg-transparent px-3 py-2">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white/95 backdrop-blur-md border-gray-200">
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {serviceItems.map((service) => (
                            <li key={service.name} className="col-span-1">
                              <NavigationMenuLink asChild>
                               <Link href={service.href}
                                  className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-[#E7107E]/5 hover:text-[#E7107E]"
                                >
                                  <div className="text-sm font-semibold text-[#0F172A]">{service.name}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                    {service.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.name} className="px-3 py-2">
                      <a
                        href={item.href}
                        className="font-semibold text-sm text-[#0F172A] hover:text-[#E7107E] transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-[#E7107E] hover:bg-[#E7107E]/90 text-white font-semibold rounded-full px-8 py-6 text-sm uppercase tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center p-2 rounded-lg text-[#0F172A] hover:text-[#E7107E] hover:bg-[#E7107E]/5"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed left-0 right-0 max-h-[80vh] overflow-y-auto bg-white/98 backdrop-blur-md shadow-xl animate-fade-in z-50 border-t border-gray-200">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <React.Fragment key={item.name}>
                  {item.hasSubmenu ? (
                    <div>
                      <button
                        className="w-full px-4 py-3 text-base font-semibold text-[#0F172A] flex items-center justify-between rounded-lg hover:bg-[#E7107E]/5 hover:text-[#E7107E] transition-colors"
                        onClick={toggleServiceSubmenu}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${serviceSubmenuOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {serviceSubmenuOpen && (
                        <div className="pl-4 mt-2 space-y-1 bg-[#F8F9FC] rounded-lg p-2">
                          {serviceItems.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-white hover:text-[#E7107E] transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setServiceSubmenuOpen(false);
                              }}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-3 rounded-lg text-base font-semibold text-[#0F172A] hover:bg-[#E7107E]/5 hover:text-[#E7107E] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </React.Fragment>
              ))}
              <div className="px-4 py-4">
                <Button
                  className="w-full bg-[#E7107E] hover:bg-[#E7107E]/90 text-white font-semibold rounded-full px-6 py-6 text-sm uppercase tracking-wide transition-all duration-200"
                  onClick={() => {
                    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
