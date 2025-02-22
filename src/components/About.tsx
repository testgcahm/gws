'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const About: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('03129769186');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="pb-6 bg-white font-semibold min-h-screen flex flex-col items-center justify-center text-center">
      {/* Logo & Heading Container */}
      <div className="flex flex-col sm-m:flex-row items-center justify-center space-y-4 sm-m:space-y-0 sm-m:space-x-4 mb-4 sm-m:mb-5">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Gujranwala Medical College Welfare Society Logo"
          className="w-20 h-20 sm-xs:w-24 sm-xs:h-24 sm-m:w-36 sm-m:h-36"
        />

        {/* Heading */}
        <h1 className="text-xl sm-xs:text-2xl sm-m:text-4xl font-bold text-green-800 leading-snug">
          Gujranwala Medical College <br />
          Welfare Society (GWS)
        </h1>
      </div>

      {/* Typewriter Effect Text */}
      <motion.p
        className="text-sm sm-xs:text-base sm-s:text-lg sm-m:text-lg text-brown-700 max-w-full sm-m:max-w-2xl mx-auto sm-m:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typewriter
          words={[
            "One of the most credible charities in Gujranwala. We are ready to fight poverty and provide hope to those in need, but we cannot win this fight without your Zakat and Donations. Every contribution helps us uplift lives, support medical aid, and create a brighter future for our community."
          ]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={20}
          deleteSpeed={0}
        />
      </motion.p>

      {/* Contact & Copy Button */}
      <div className="mt-4 flex flex-row justify-center items-center space-x-2">
        <p className="text-green-900 text-base sm-xs:text-lg font-semibold">
          Contact: 03129769186
        </p>
        <button
          onClick={copyToClipboard}
          className="text-green-600 hover:text-green-800 focus:outline-none"
        >
          <Copy className="w-5 h-5 sm-xs:w-6 sm-xs:h-6" />
        </button>

        {copied && <span className="text-xs sm-xs:text-sm text-green-600">Copied!</span>}
      </div>
    </section>
  );
};

export default About;
