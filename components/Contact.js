'use client';

import ContactForm from './ContactForm';
import { useRef, useEffect, useState } from 'react';

export default function Contact() {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if(ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <main className="font-sans flex flex-col w-full items-center justify-center min-h-screen">
            <section
                id="contact"
                ref={ref} 
                className={`snap-start w-full min-h-screen bg-[#F9FAFB] flex items-center justify-center 
                    transform transition-all duration-1500 ease-out 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                `}
            >
                <div className="flex flex-col gap-6 md:gap-16 items-center justify-center">
                    <div className='text-center justify-center'>
                        <h2 className="leading-relaxed text-[#1F2937] text-3xl md:text-6xl font-semibold">
                            Contact
                        </h2>
                        <p className='text-[#4B5563] text-xl md:text-2xl font-semibold'>
                            Receive an email with more info
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </section>
        </main>
    );
}