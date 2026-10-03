import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-5',
    md: 'h-6 sm:h-7',
    lg: 'h-9 sm:h-10',
    xl: 'h-12 sm:h-14'
  };

  return (
    <div className={`shrink-0 inline-flex items-center select-none ${sizeClasses[size]} ${className}`}>
      {/* VECTOR HIGH-RES TOUMIVAL LOGO SVG - PERFECT PROPORTIONS */}
      <svg
        viewBox="0 0 375 70"
        preserveAspectRatio="xMinYMid meet"
        className="h-full w-auto block shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="toumiBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#29B6F6" />
            <stop offset="100%" stopColor="#0288D1" />
          </linearGradient>
          <linearGradient id="toumiGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5C158" />
            <stop offset="100%" stopColor="#C8B89A" />
          </linearGradient>
        </defs>

        {/* --- LETTER T (Blue with slice) --- */}
        <g id="letter-T">
          <rect x="0" y="8" width="34" height="9" fill="url(#toumiBlue)" />
          <path d="M 12 17 L 22 17 L 22 62 L 12 62 Z" fill="url(#toumiBlue)" />
          {/* Slice */}
          <polygon points="10,25 24,18 20,15 6,22" fill="#0B0B0B" />
        </g>

        {/* --- LETTER O (White) --- */}
        <g id="letter-O" transform="translate(38, 0)">
          <path
            d="M 23 8 C 10 8 0 18 0 35 C 0 52 10 62 23 62 C 36 62 46 52 46 35 C 46 18 36 8 23 8 Z M 23 17 C 30 17 36 24 36 35 C 36 46 30 53 23 53 C 16 53 10 46 10 35 C 10 24 16 17 23 17 Z"
            fill="#FFFFFF"
          />
        </g>

        {/* --- LETTER U (Blue with slice) --- */}
        <g id="letter-U" transform="translate(90, 0)">
          <path
            d="M 0 8 L 10 8 L 10 45 C 10 51 15 54 22 54 C 29 54 34 51 34 45 L 34 8 L 44 8 L 44 46 C 44 56 34 63 22 63 C 10 63 0 56 0 46 Z"
            fill="url(#toumiBlue)"
          />
          {/* Slice */}
          <polygon points="2,22 18,12 15,9 0,19" fill="#0B0B0B" />
        </g>

        {/* --- LETTER M (White) --- */}
        <g id="letter-M" transform="translate(142, 0)">
          <polygon points="0,62 10,62 10,25 23,48 29,48 42,25 42,62 52,62 52,8 40,8 26,34 12,8 0,8" fill="#FFFFFF" />
        </g>

        {/* --- LETTER I (White) --- */}
        <g id="letter-I" transform="translate(200, 0)">
          <rect x="0" y="8" width="10" height="54" fill="#FFFFFF" />
        </g>

        {/* --- SPACE --- */}

        {/* --- LETTER V (White) --- */}
        <g id="letter-V" transform="translate(224, 0)">
          <polygon points="0,8 11,8 24,48 37,8 48,8 29,62 19,62" fill="#FFFFFF" />
        </g>

        {/* --- LETTER A (White) --- */}
        <g id="letter-A" transform="translate(278, 0)">
          <polygon points="20,8 30,8 50,62 39,62 33,45 16,45 10,62 0,62" fill="#FFFFFF" />
          <polygon points="24,18 19,36 30,36" fill="#0B0B0B" />
        </g>

        {/* --- LETTER L (Blue with slice) --- */}
        <g id="letter-L" transform="translate(332, 0)">
          <polygon points="0,8 10,8 10,53 34,53 34,62 0,62" fill="url(#toumiBlue)" />
          {/* Slice */}
          <polygon points="0,26 14,16 11,13 0,21" fill="#0B0B0B" />
        </g>

        {/* --- GOLD CORNER TRIANGLE NOTCH --- */}
        <polygon points="350,0 375,0 375,20" fill="url(#toumiGold)" />
      </svg>
    </div>
  );
};
