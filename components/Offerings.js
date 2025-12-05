'use client';

import { useRef, useEffect, useState } from 'react';
import FlipCard from './FlipCard';
import Link from "next/link";

export default function Offerings() {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if(ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <main className="flex flex-col w-full items-center justify-center min-h-screen">
            <section
                id="offerings"
                ref={ref}
                className={`snap-start py-6 md:py-2 relative w-full min-h-screen bg-[#82a5dd] flex items-center justify-center text-white 
                    transform transition-all duration-1500 ease-out 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                `}
            >
                    <div className="flex flex-col gap-6 md:gap-16 items-center justify-center">
                        <h2 className="text-center text-3xl md:text-6xl font-semibold">
                            Offerings
                        </h2>
                        <div className="hidden md:grid grid-cols-3 gap-8 justify-center items-center">
                            <FlipCard
                                frontContent={<p className='text-2xl font-semibold'>Website Development</p>}
                                backContent={<div className='grid grid-cols-[fr2_fr1] gap-4 p-4'>
                                    <div className='col-start-1 grid grid-rows-3 gap-4'>
                                        <div className='row-start-1'>
                                            <p className='text-xl font-semibold'>Landing Page Creation</p>
                                            <p className='text-lg'>Visual branding, CTAs, modern design</p>
                                        </div>
                                        <div className='row-start-2'>
                                            <p className='text-xl font-semibold'>Webiste Refresh</p>
                                            <p className='text-lg'>Bug fixes, mobile-friendly, tool updates</p>
                                        </div>
                                        <div className='row-start-3'>
                                            <p className='text-xl font-semibold'>Design to Code Conversion</p>
                                            <p className='text-lg'>Convert mockup to HTML and CSS code</p>
                                        </div>
                                    </div>
                                    <div className='col-start-2 grid grid-rows-3'>
                                        <div className='row-start-1 text-xl font-semibold'>$100</div>
                                        <div className='row-start-2 text-xl font-semibold'>$150</div>
                                        <div className='row-start-3 text-xl font-semibold'>$120</div>
                                    </div>
                                </div>}
                            />
                            <FlipCard
                                frontContent={<p className='text-2xl font-semibold'>Data Analysis</p>}
                                backContent={<div className='grid grid-cols-[fr2_fr1] gap-4 p-4'>
                                    <div className='col-start-1 grid grid-rows-3 gap-4'>
                                        <div className='row-start-1'>
                                            <p className='text-xl font-semibold'>Data Cleansing</p>
                                            <p className='text-lg'>Resolve inconsistencies, structure data</p>
                                        </div>
                                        <div className='row-start-2'>
                                            <p className='text-xl font-semibold'>Descriptive Summary</p>
                                            <p className='text-lg'>Averages, trends, correlations, insights</p>
                                        </div>
                                        <div className='row-start-3'>
                                            <p className='text-xl font-semibold'>Data Visualization</p>
                                            <p className='text-lg'>Geo mapping, KPIs, bar and line charts</p>
                                        </div>
                                    </div>
                                    <div className='col-start-2 grid grid-rows-3'>
                                        <div className='row-start-1 text-xl font-semibold'>$75</div>
                                        <div className='row-start-2 text-xl font-semibold'>$90</div>
                                        <div className='row-start-3 text-xl font-semibold'>$150</div>
                                    </div>
                                </div>}
                            />
                            <FlipCard
                                frontContent={<p className='text-2xl font-semibold'>Transcription</p>}
                                backContent={<div className='grid grid-cols-[fr2_fr1] gap-4 p-4'>
                                    <div className='col-start-1 grid grid-rows-3 gap-4'>
                                        <div className='row-start-1'>
                                            <p className='text-xl font-semibold'>Meeting Notes</p>
                                            <p className='text-lg'>Key points, decisions, actions, speakers</p>
                                        </div>
                                        <div className='row-start-2'>
                                            <p className='text-xl font-semibold'>Podcast Episodes</p>
                                            <p className='text-lg'>Full dialogue, natural flow and structure</p>
                                        </div>
                                        <div className='row-start-3'>
                                            <p className='text-xl font-semibold'>YouTube Videos</p>
                                            <p className='text-lg'>Verbatim, caption-ready, SEO script</p>
                                        </div>
                                    </div>
                                    <div className='col-start-2 grid grid-rows-3'>
                                        <div className='row-start-1 text-xl font-semibold'>$60</div>
                                        <div className='row-start-2 text-xl font-semibold'>$105</div>
                                        <div className='row-start-3 text-xl font-semibold'>$160</div>
                                    </div>
                                </div>}
                            />
                        </div>
                        <div className="relative h-screen md:hidden flex flex-col items-center justify-between gap-4">
                            <div className='sticky top-48 z-50 flex justify-center'>
                                <a
                                    href="#contact"
                                    className="py-4 px-6 rounded-md bg-blue-600 font-semibold text-white text-lg"
                                >
                                    Message for More
                                </a>
                            </div>
                            <FlipCard
                                frontContent={<p className='text-xl font-semibold'>Websites</p>}
                                backContent={<ul className='text-xl font-semibold list-disc'>
                                    <li>Landing Page</li>
                                    <li>Fix + Refresh</li>
                                    <li>Design to Code</li>
                                </ul>}
                            />
                            <FlipCard
                                frontContent={<p className='text-xl font-semibold'>Data Analysis</p>}
                                backContent={<ul className='text-xl font-semibold list-disc'>
                                    <li>Data Cleanup</li>
                                    <li>Insights</li>
                                    <li>Visualization</li>
                                </ul>}
                            />
                            <FlipCard
                                frontContent={<p className='text-xl font-semibold'>Transcription</p>}
                                backContent={<ul className='text-xl font-semibold list-disc'>
                                    <li>Meeting Notes</li>
                                    <li>Podcasts</li>
                                    <li>YouTube</li>
                                </ul>}
                            />
                        </div>
                    </div>
            </section>
        </main>
    );
}