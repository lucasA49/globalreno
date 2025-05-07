import React, { useEffect, useState } from 'react';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8kBoL5Y5ySa4e01MS5yJ-9RRmn17EEaKWBVJal-DwFGb9Xldeg&s=10&ec=72940544',
  'https://via.placeholder.com/1200x600?text=Image+2',
  'https://via.placeholder.com/1200x600?text=Image+3',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[20vh] md:h-[20vh] overflow-hidden relative">
      <div
        className="flex transition-transform duration-700 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  );
}
