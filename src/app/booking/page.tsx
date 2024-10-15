'use client';

import * as React from 'react';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import DateReserve from '../../components/DateReserve';
import getUserProfile from '@/libs/getUserProfile';

interface ProfileData {
  name: string;
  email: string;
  tel: string;
  createdAt: string;
}

export default function BookingPage() {
  const { data: session } = useSession();
  const [hospital, setHospital] = useState('');

  console.log(session);

  const handleHospitalChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setHospital(event.target.value as string);
  };

  return (
    <div className="container mx-auto">
      {session && (
        <div className="bg-white rounded-md shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">User Profile</h2>
          <p><strong>Name:</strong> {session.user.name}</p>
          <p><strong>Email:</strong> {session.user.email}</p>
        </div>
      )}
      <div className="bg-gray-100 rounded-md shadow-lg pb-8 w-full">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 pt-8 mb-8">
          Vaccine Booking
        </h1>
        <form noValidate autoComplete="off" className="px-8">
          <TextField 
            name="Name-Lastname" 
            label="Name-Lastname" 
            variant="standard" 
            fullWidth 
            margin="normal"
          />
          <TextField 
            name="Citizen ID" 
            label="Citizen ID" 
            variant="standard" 
            fullWidth 
            margin="normal"
          />
          <FormControl variant="standard" fullWidth margin="normal">
            <InputLabel id="hospital-label">Select Hospital</InputLabel>
            <Select
              labelId="hospital-label"
              id="hospital"
              value={hospital}
              onChange={handleHospitalChange}
              label="Select Hospital"
            >
              <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
              <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
              <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
            </Select>
          </FormControl>
          <div className="mt-8">
            <DateReserve />
          </div>
          <div className="mt-8 flex justify-center">
            <Button 
              variant="contained" 
              color="primary" 
              name="Book Vaccine"
              className='bg-teal-500 hover:bg-teal-600'
            >
              Book Vaccine
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}