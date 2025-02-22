// app/components/Cabinet.tsx
import React from 'react';

const Cabinet: React.FC = () => {
  return (
    <section id="cabinet" className="p-6 text-center min-h-screen bg-white">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Cabinet</h2>
      <p className="text-brown-700 max-w-2xl mx-auto">
        Meet our leadership team and cabinet members driving the initiatives of Gujranwala Medical College Welfare Society.
      </p>
    </section>
  );
};

export default Cabinet;