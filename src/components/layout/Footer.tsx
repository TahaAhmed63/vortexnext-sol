'use client';

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const subscribe = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    const data = await res.json();
    setMessage(data.message);
    if (res.ok) setEmail('');
  };
  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-10">
      <div className="container max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div className="space-y-5">
            <Link href="/" className="inline-block mb-3">
              <img
                src="/vortexnewlogo-Photoroom.png"
                alt="Vortex Solution Logo"
                className="w-[200px] h-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses with cutting-edge AI-driven solutions, innovative digital marketing strategies, and world-class development services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#E7107E] transition-colors p-2 rounded-full hover:bg-white/5">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E7107E] transition-colors p-2 rounded-full hover:bg-white/5">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/vortexsolution.io?igsh=aWhzNjlzdTZkNTlv&utm_source=qr" className="text-gray-400 hover:text-[#E7107E] transition-colors p-2 rounded-full hover:bg-white/5">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/vortexsolution-io" className="text-gray-400 hover:text-[#E7107E] transition-colors p-2 rounded-full hover:bg-white/5">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Services', 'Projects', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-[#E7107E] transition-colors flex items-center text-sm group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 transition-transform group-hover:translate-x-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#E7107E] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">123 Innovation Ave, Tech City, TC 10010</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#E7107E] mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#E7107E] mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@vortexsolution.io</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              Subscribe to our newsletter for the latest industry insights and company news.
            </p>
            <form onSubmit={subscribe} className='flex flex-col space-y-3'>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#E7107E] focus:ring-[#E7107E] rounded-lg"
              />
              <Button
                className="bg-[#E7107E] hover:bg-[#E7107E]/90 text-white font-semibold rounded-full px-6 py-6 text-sm uppercase tracking-wide transition-all duration-200"
              >
                Subscribe
              </Button>
              {message && <p className="text-sm text-gray-400">{message}</p>}
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Vortex Solution. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-[#E7107E] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#E7107E] text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#E7107E] text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
