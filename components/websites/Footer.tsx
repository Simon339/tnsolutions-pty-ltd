"use client";

import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="bg-[#87CEEB] shadow-sm mt-8">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-900">
          © {currentYear ? currentYear : 'Loading...'} Our <a href="" className='hover:text-[#0000FF]'>Magotlho TN Solutions (PTY) LTD</a>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
