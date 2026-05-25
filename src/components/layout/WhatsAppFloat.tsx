'use client';

import React from 'react';

export default function WhatsAppFloat() {
  return (
    <a 
      href="https://wa.me/51938204217?text=Hola%2C%20vi%20su%20página%20y%20quiero%20información" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute right-full mr-4 px-3 py-1 bg-surface-container text-on-surface-variant text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-outline-variant">
        Escríbenos
      </div>
      <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg animate-pulse-slow group-hover:scale-110 transition-transform duration-300">
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="white" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.29.139.519.22.703.282.185.061.354.049.485-.029.13-.079.549-.443.698-.592.149-.149.297-.149.446-.149s.3-.001.5-.001c.198 0 .471.074.743.372.272.297 1.04 1.016 1.04 2.379 0 1.463-1.065 2.875-1.213 3.074-.149.198-.347.223-.644.075zM12.001 2c-5.523 0-10 4.477-10 10 0 1.761.46 3.462 1.263 4.96L2 22l5.238-1.374c1.42.72 3.04 1.1 4.762 1.1 5.523 0 10-4.477 10-10s-4.477-10-10-10z" />
        </svg>
      </div>
      <style jsx>{`
        @keyframes pulse-slow {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }
      `}</style>
    </a>
  );
}
