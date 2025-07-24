'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const LogoLoader = () => {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const maxRepeats = 3;
    const animationDuration = 3000;
    let count = 0;

    const runAnimation = () => {
      if (count >= maxRepeats) return;

      if (animationRef.current) {
        animationRef.current.style.animationDuration = `${animationDuration / 1000}s`;
        animationRef.current.classList.remove('spinJump');
        void animationRef.current.offsetWidth;
        animationRef.current.classList.add('spinJump');
      }

      count++;
      setTimeout(runAnimation, animationDuration);
    };

    runAnimation();
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div ref={animationRef} className="animate-logo spinJump">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={100}
          className="w-24 h-24 object-contain"
        />
      </div>

      <style jsx>{`
        @keyframes spinJump {
          0% {
            transform: rotateY(0deg) translateY(0);
          }
          50% {
            transform: rotateY(1080deg) translateY(0);
          }
          55% {
            transform: rotateY(1080deg) translateY(-20px);
          }
          60% {
            transform: rotateY(1080deg) translateY(0);
          }
          100% {
            transform: rotateY(1080deg) translateY(0);
          }
        }

        .spinJump {
          animation-name: spinJump;
          animation-timing-function: ease-in-out;
          animation-fill-mode: forwards;
          animation-iteration-count: 1;
          animation-duration: 2s;
        }
      `}</style>
    </div>
  );
};

export default LogoLoader;
