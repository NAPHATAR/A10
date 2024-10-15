import React, { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  vdoSrc: string;
  isPlaying: boolean;
}

export default function VideoPlayer({ vdoSrc, isPlaying }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.muted = true;
        if (isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }
  }, [isPlaying]);

  return (
    <div className="relative w-full h-0 pb-[56.25%]">
      <video 
        ref={videoRef} 
        src={vdoSrc}
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
        autoPlay
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}