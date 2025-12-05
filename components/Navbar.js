'use client';

import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`font-sans fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 flex justify-between items-center h-16">
                <div>
                    <a
                        href="#home"
                        className="text-[#4B5563] text-xl md:text-4xl hover:text-[#3B82F6] font-semibold"
                    >
                        Sarah Bill
                    </a>
                </div>
                <div className="flex gap-4 md:gap-12">
                    <a
                        href="#offerings"
                        className="text-[#4B5563] font-semibold text-lg md:text-2xl hover:text-[#3B82F6] transition-colors"
                    >
                        Offerings
                    </a>
                    <a
                        href="#contact"
                        className="text-[#4B5563] font-semibold text-lg md:text-2xl hover:text-[#3B82F6] transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}