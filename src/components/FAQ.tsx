'use client';


import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How is Callix different from Gong or Chorus?",
    answer: "Traditional tools are built to train sales reps. Callix is built for marketing and revenue leaders to extract buyer psychology and turn it into high-performing marketing creative. We're an insights-to-creative engine, not just a recorder."
  },
  {
    question: "Is it difficult to implement?",
    answer: "No — you can connect your Zoom or Google Meet workspace in one click. You'll be analyzing calls and seeing creative patterns in under 10 minutes."
  },
  {
    question: "Does it work in my industry?",
    answer: "If you sell through conversations (B2B SaaS, Professional Services, High-ticket E-comm, etc.), yes. If your customers talk to you before they buy, Callix will find the patterns that scale your revenue."
  },
  {
    question: "Does this replace our CRM?",
    answer: "Not at all. Callix enhances your CRM (Salesforce, HubSpot, etc.) with qualitative buyer insights that a CRM simply cannot generate. We sync with your existing stack seamlessly."
  },
  {
    question: "Is call recording compliant?",
    answer: "Absolutely. Consent workflows, data encryption, and compliance controls (GDPR, SOC2) are built into the core of the platform."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-8 lg:px-16 py-32 bg-black border-t border-white/5 relative">
      {/* Section-specific gradient - subtle left-side glow for approachability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_-10%_50%,_rgba(255,107,44,0.05),_transparent_50%)] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        <div className="flex flex-col">
          <h2 className="text-[48px] lg:text-[72px] font-serif-elegant font-normal tracking-tight leading-[1.05] mb-8">
            Frequently <br />asked questions
          </h2>
          <p className="text-[16px] text-zinc-400 font-light max-w-[320px] leading-relaxed">
            Don't see the answer you're looking for? <br />
            <a href="#" className="text-white hover:text-zinc-300 transition-colors border-b border-white/20 pb-0.5">Contact us.</a>
          </p>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className={`text-[20px] lg:text-[24px] font-medium transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-zinc-200 group-hover:text-white'}`}>
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-zinc-500 transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[300px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-zinc-400 text-[16px] lg:text-[18px] leading-relaxed font-light">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
