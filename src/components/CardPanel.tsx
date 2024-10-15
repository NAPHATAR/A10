"use client"

import React, { useState } from 'react';
import Card from './Card';

interface Hospital {
  hid: string;
  name: string;
  imageSrc: string;
}

const mockHospitals: Hospital[] = [
  { hid: '001', name: 'Chulalongkorn Hospital', imageSrc: '/img/chulalongkorn.jpg' },
  { hid: '002', name: 'Rajavithi Hospital', imageSrc: '/img/rajavithi.jpg' },
  { hid: '003', name: 'Thammasat Hospital', imageSrc: '/img/thammasat.jpg' },
];

export default function CardPanel() {
  const [ratings, setRatings] = useState<Map<string, number>>(new Map(mockHospitals.map(h => [h.hid, 0])));
  const [displayedHospitals, setDisplayedHospitals] = useState<Hospital[]>(mockHospitals);

  const handleRatingChange = (hid: string, newValue: number | null) => {
    if (newValue !== null) {
      setRatings(prev => new Map(prev).set(hid, newValue));
      if (!displayedHospitals.some(h => h.hid === hid)) {
        setDisplayedHospitals(prev => [...prev, mockHospitals.find(h => h.hid === hid)!]);
      }
    }
  };

  const handleRemoveFromList = (hid: string) => {
    setDisplayedHospitals(prev => prev.filter(hospital => hospital.hid !== hid));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {mockHospitals.map((hospital) => (
          <Card 
            key={hospital.hid}
            hid={hospital.hid}
            hospitalName={hospital.name}
            imgSrc={hospital.imageSrc}
            rating={ratings.get(hospital.hid) || 0}
            onRatingChange={handleRatingChange}
          />
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Hospital List with Ratings: {displayedHospitals.length}</h2>
        <ul>
          {displayedHospitals.map((hospital) => (
            <li 
              key={hospital.hid}
              data-testid={hospital.name}
              onClick={() => handleRemoveFromList(hospital.hid)}
              className="cursor-pointer hover:bg-gray-300 p-2 hover:scale-105 transition-transform duration-200 ease-in-out mx-4"
            >
              {hospital.name}: {ratings.get(hospital.hid) || 0}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}