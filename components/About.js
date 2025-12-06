'use client';

import { useRef, useEffect, useState } from 'react';
import Image from "next/image";
import Card from './Card';

export default function About() {
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
        <main className="flex flex-col w-full items-center justify-center min-h-screen">
            <section
                id="about"
                ref={ref}
                className={`snap-start py-6 md:py-2 relative w-full min-h-screen bg-[#6680aa] flex items-center justify-center text-white 
                    transform transition-all duration-1500 ease-out 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                `}
            >
                    <div className="flex flex-col gap-6 md:gap-16 items-center justify-center">
                        <h2 className="text-center text-3xl md:text-6xl font-semibold">
                            About
                        </h2>
                        <div className="hidden md:grid grid-cols-2 gap-8 justify-center items-center">
                            <Card
                                Content={
                                    <div className='overflow-hidden mask-[radial-gradient(circle,white_70%,transparent_100%)]'>
                                        <Image
                                            src="/profilepic1.jpg"
                                            height="450"
                                            width="230"
                                            alt="profile pic large"
                                            className='object-cover'
                                        />
                                    </div>
                                }
                            />
                            <Card
                                Content={<p className='text-lg font-medium p-6'>
                                    For more than 20 years I have built a career
                                    in the data analytics and computer science fields.
                                    I pride myself on having the perfect blend of
                                    business acumen and tech skills, allowing me
                                    to deliver projects extremely fast and professionally.
                                </p>}
                            />
                        </div>
                        <div className="relative h-screen md:hidden flex flex-col justify-between items-center gap-4">
                            <Card
                                Content={
                                    <div className='overflow-hidden mask-[radial-gradient(circle,white_70%,transparent_100%)]'>
                                        <Image
                                            src="/profilepic2.jpg"
                                            height="230"
                                            width="125"
                                            alt="profile pic large"
                                            className='object-cover'
                                        />
                                    </div>
                                }
                            />
                            <Card
                                Content={<p className='text-lg font-medium p-4 text-center'>
                                    20 years in project management and data analytics
                                </p>}
                            />
                            <Card
                                Content={<p className='text-lg font-medium p-4 text-center'>
                                    I deliver extremely fast and professionally
                                </p>}
                            />
                        </div>
                    </div>
            </section>
        </main>
    );
}