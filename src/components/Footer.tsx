'use client';


import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = {
    Product: ['Intelligence Engine', 'Conversation Analysis', 'Creative Generation'],
    Solutions: ['Marketing Directors', 'Sales Leaders', 'Revenue Ops', 'Founders'],
    Company: ['About Us', 'Careers', 'Privacy Policy', 'Security'],
    Connect: ['Contact Support', 'Book a Demo', 'LinkedIn', 'Twitter']
  };

  return (
    <footer className="w-full px-8 lg:px-16 pb-24 pt-32 bg-black z-10 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-24">
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center -ml-3">
              <img src="/callix-logo.png" alt="Callix" className="h-[90px] w-auto object-contain" />
            </div>
            <p className="text-zinc-400 text-[14px] leading-relaxed max-w-[320px] font-light">
              The intelligence bridge between your sales calls and your high-performing marketing.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-5">
              <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.1em]">{title}</h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-[14px] text-zinc-300 hover:text-white transition-colors font-light">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/5">
          <p className="text-[12px] text-zinc-500 leading-relaxed font-light">
            © 2025 Callix AI. All rights reserved. SOC 2 Type II Certified. AES-256 Encrypted.
            Privacy is our priority. Callix provides conversation intelligence for revenue-focused organizations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
