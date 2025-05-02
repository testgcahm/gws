// app/page.tsx
'use client';

import About from '@/components/About';
import Cabinet from '@/components/Cabinet';
import Departments from '@/components/Departments';
import Donate from '@/components/Donate';
import Header from '@/components/Header';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'departments', 'donate'];
      // const sections = ['about', 'departments', 'donate', 'cabinet'];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-hidden">
      {/* Header */} 

      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content - All Sections */}
      <main className="container mx-auto p-6 flex-grow">
        <About />
        <Departments />
        <Donate />
        {/* <Cabinet /> */}
      </main>

      {/* Footer */}
      {/* <footer className="bg-white p-4 text-center text-brown-700">
        <p>
          Contact: 03129769186{' '}
          <Link href="tel:03129769186" className="text-green-600 hover:underline">
            📞
          </Link>
        </p>
      </footer> */}
    </div>
  );
}
