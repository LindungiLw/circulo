'use client';

import React, { useEffect, useRef, useState } from 'react';

interface LottiePlayerProps {
  animationPath?: string;
  animationData?: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export default function LottiePlayer({
  animationPath = '/animations/Scene.json',
  animationData,
  className = 'w-full h-full',
  loop = true,
  autoplay = true,
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let animItem: any = null;
    let isCancelled = false;

    async function loadLottie() {
      try {
        const lottieModule = await import('lottie-web');
        const lottie = lottieModule.default || lottieModule;

        if (isCancelled || !containerRef.current) return;

        containerRef.current.innerHTML = '';

        const config: any = {
          container: containerRef.current,
          renderer: 'svg',
          loop,
          autoplay,
        };

        if (animationData) {
          config.animationData = animationData;
        } else if (animationPath) {
          config.path = animationPath;
        }

        animItem = lottie.loadAnimation(config);

        animItem.addEventListener('DOMLoaded', () => {
          if (!isCancelled) setIsLoaded(true);
        });

        animItem.addEventListener('data_failed', () => {
          if (!isCancelled) setHasError(true);
        });

        animItem.addEventListener('error', () => {
          if (!isCancelled) setHasError(true);
        });
      } catch (err) {
        console.error('Failed to load lottie animation:', err);
        if (!isCancelled) setHasError(true);
      }
    }

    loadLottie();

    return () => {
      isCancelled = true;
      if (animItem) {
        animItem.destroy();
      }
    };
  }, [animationPath, animationData, loop, autoplay]);

  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1a3626]/5 gap-2">
          <div className="w-8 h-8 border-2 border-[#1a3626] border-t-transparent rounded-full animate-spin"></div>
          <span className="text-[11px] font-mono text-[#1a3626] font-semibold">Memuat Animasi...</span>
        </div>
      )}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500 font-mono p-4 text-center">
          Animasi sedang dimuat...
        </div>
      )}
      <div 
        ref={containerRef} 
        className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:max-h-full [&>svg]:object-contain" 
      />
    </div>
  );
}
