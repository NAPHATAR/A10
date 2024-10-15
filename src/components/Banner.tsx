"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react'; 

const bannerImages = [
  '/img/cover.jpg',
  '/img/cover2.jpg',
  '/img/cover3.jpg',
  '/img/cover4.jpg'
];

export default function Banner() {
  const { data: session } = useSession(); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const handleSelectHospital = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    router.push('/hospital');
  };

  return (
    <div className="relative w-full h-72 flex items-center justify-center overflow-hidden shadow-lg rounded-md hover:scale-105 transition-transform duration-200 ease-in-out">
      <div className="flex items-center justify-center h-screen" onClick={handleImageClick}>
        <Image 
          src={bannerImages[currentImageIndex]} 
          alt="Vaccine Service Center" 
          fill
          className="cursor-pointer items-center"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-white p-5 z-10">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold mb-4 tracking-wide">Vaccine Service Center</h1>
            <p className="text-xl font-semibold max-w-3xl mx-auto leading-relaxed">
              Get vaccinated and protect yourself and your community.
            </p>
          </div>
        </div>
        <button 
          className="absolute bottom-4 right-4 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded z-20"
          onClick={handleSelectHospital}
        >
          Select Hospital
        </button>

        {session && (
          <div className="absolute top-4 right-4 bg-opacity-70 bg-black text-white p-2 rounded-md">
            Welcome {session?.user?.name}
          </div>
        )}
      </div>
    </div>
  );
}
