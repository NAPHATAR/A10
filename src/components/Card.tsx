"use client";

import React from 'react';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import Link from 'next/link';

interface CardProps {
  hid: string;
  hospitalName: string;
  imgSrc: string;
  rating?: number; 
  onRatingChange?: (hid: string, newValue: number | null) => void; 
}

export default function Card({ hid, hospitalName, imgSrc, rating, onRatingChange }: CardProps) {
  const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    event.preventDefault();
    event.stopPropagation();
    if (onRatingChange) {
      onRatingChange(hid, newValue); 
    }
  };

  return (
    <InteractiveCard>
      <Link href={`/hospital/${hid}`} passHref>
        <div className="rounded overflow-hidden relative cursor-pointer">
          <Image className="inset-0 w-full h-full object-cover rounded-t-lg" src={imgSrc} alt={hospitalName} width={600} height={400} priority/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{hospitalName}</div>
            {rating !== undefined && (
              <Rating
                name={`${hospitalName} Rating`}
                value={rating}
                onChange={handleRatingChange}
                onClick={(event) => event.stopPropagation()}
                data-testid={`${hospitalName} Rating`}
                id={`${hospitalName} Rating`}
              />
            )}
          </div>
        </div>
      </Link>
    </InteractiveCard>
  );
}
