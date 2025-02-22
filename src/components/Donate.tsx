'use client';

import React, { useState } from 'react';
import { Copy } from 'lucide-react';

const Donate: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="donate" className="p-6 text-center pt-20 min-h-screen bg-white">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Donate</h2>
      <p className="text-brown-700 max-w-2xl mx-auto font-semibold mb-6">
        Your Zakat and donations can make a difference. Contribute and help us fight poverty.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* JazzCash Box */}
        <div className="bg-brown-900 text-white p-6 rounded-lg shadow-lg relative">
          <h3 className="text-xl font-bold mb-3">JazzCash</h3>
          <p className="text-sm font-medium">Account: 03015830603</p>
          <p className="text-sm">Account Title: Rimsha Tariq</p>
          <button
            onClick={() => copyToClipboard('03015830603', 'jazzcash')}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <Copy size={20} />
          </button>
          {copied === 'jazzcash' && (
            <span className="text-xs text-amber-400 absolute top-12 right-4">
              Copied!
            </span>
          )}
        </div>

        {/* HBL Box */}
        <div className="bg-green-800 text-white p-6 rounded-lg shadow-lg relative">
          <h3 className="text-xl font-bold mb-3">HBL</h3>
          <p className="text-sm font-medium">Account: 19037900900</p>
          <p className="text-sm">Account Title: Muhammad Ada</p>
          <button
            onClick={() => copyToClipboard('19037900900', 'hbl')}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <Copy size={20} />
          </button>
          {copied === 'hbl' && (
            <span className="text-xs text-green-300 absolute top-12 right-4">
              Copied!
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Donate;
