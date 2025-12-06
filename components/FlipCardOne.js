'use client';

import { useState } from "react";

export default function FlipCardOne({ frontContent, backContent }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="w-60 h-45 md:w-100 md:h-90 perspective cursor-pointer"
            onClick={() => setFlipped(!flipped)}
            style={{ perspective: '1000px' }}
        >
            <div
                className={`relative w-full h-full transition-transform duration-500`}
                style={{
                    transformStyle: 'preserve-3d',
                    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
            >
                <div 
                    className="absolute w-full h-full backface-hidden bg-white text-black border rounded-lg shadow-md flex items-center justify-center"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                        {frontContent}
                </div>
                <div 
                    className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-700 text-white border rounded-lg shadow-md flex items-center justify-center"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                    }}
                >
                        {backContent}
                </div>
            </div>
        </div>
    );
}