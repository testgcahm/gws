'use client';

import React from 'react';
import { motion } from 'framer-motion';

const departments = [
  {
    name: 'Finance',
    description:
      'Spearheading fundraising events initiatives (Charity Gala, Bakesales, Sharing Spoon Bonfires).',
    color: 'bg-brown-700',
  },
  {
    name: 'Outreach',
    description:
      'Crafting and executing marketing strategies and expanding reach beyond Gujranwala Medical College.',
    color: 'bg-green-900',
  },
  {
    name: 'Bloodline',
    description:
      'Driving blood donation campaigns. Connecting blood donors with those in need.',
    color: 'bg-brown-900',
  },
  {
    name: 'Patient Welfare Services',
    description:
      'Evaluating patients and prescribing them medications in GMC Teaching Hospital and DHQ, provided free of cost.',
    color: 'bg-green-800',
  },
  {
    name: 'Events Management',
    description:
      'Supervision and execution of events and advisory to four departments of GWS.',
    color: 'bg-brown-700',
  },
];

const Departments: React.FC = () => {
  return (
    <section id="departments" className="p-6 text-center min-h-screen flex flex-col items-center justify-center bg-white scroll-mt-20">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Departments</h2>
      <p className="text-brown-700 max-w-2xl mx-auto mb-8 font-semibold">
        Explore our various departments working tirelessly to support the community through impactful initiatives. From improving healthcare services and education to poverty alleviation, each team plays a crucial role in creating lasting change.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {departments.map((dept, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg shadow-lg text-white min-w-[180px] ${dept.color} transition-transform hover:scale-105`}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
          >
            <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
            <p className="text-sm">{dept.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Departments;
