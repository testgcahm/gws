'use client';

import React from 'react';
import Link from 'next/link';

interface HeaderProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            setActiveSection(sectionId);
        }
    };

    return (
        <nav className="bg-white p-2 shadow-sm shadow-green-800 w-full z-10 fixed top-0 left-0 border-b-1 border-green-800">
            <div className="container mx-auto flex space-x-2 justify-between items-center">
                <div className="mb-2">
                    <img
                        src="/logo.png"
                        alt="Gujranwala Medical College Welfare Society Logo"
                        className="w-12 h-12"
                    />
                </div>

                <div className="flex sm-xs:space-x-6 xs:space-x-2 xs-md:space-x-4">
                    {/* {['about', 'departments', 'donate', 'cabinet'].map((section) => ( */}
                    {['about', 'departments', 'donate'].map((section) => (
                        <Link
                            key={section}
                            href={`#${section}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(section);
                            }}
                            className={`text-brown-700 hover:text-brown-900 xs-md:font-semibold xs:font-normal transition-transform duration-300 ease-in-out transform ${activeSection === section ? 'scale-110 text-brown-900' : 'hover:scale-110'
                                }`}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Header;
