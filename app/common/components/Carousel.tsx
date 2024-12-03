"use client";

import React, { useEffect, useRef, useState } from "react";

interface CarouselWrapperProps {
  children: React.ReactNode;
  options?: {
    loop?: boolean;
    autoplay?: boolean;
    autoplayInterval?: number;
    dots?: boolean;
    nav?: boolean;
    responsive?: {
      [breakpoint: number]: {
        items: number;
        nav?: boolean;
        dots?: boolean;
      };
    };
  };
  className?: string;
}

const CarouselWrapper: React.FC<CarouselWrapperProps> = ({
  children,
  options,
  className = "",
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const totalItems = React.Children.count(children);

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;

      // Determine items per view based on breakpoints
      const breakpoints = Object.keys(options?.responsive || {}).map(Number).sort((a, b) => a - b);
      const matchedBreakpoint = breakpoints.reduce((acc, bp) => (width >= bp ? bp : acc), 0); // Find largest matching breakpoint

      setItemsPerView(options?.responsive?.[matchedBreakpoint]?.items || 1);
    };

    updateItemsPerView(); // Set initial value
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [options?.responsive]);

  const goToSlide = (index: number) => {
    const wrapper = carouselRef.current;
    if (wrapper) {
      if (options?.loop) {
        if (index < 0) {
          index = Math.ceil(totalItems / itemsPerView) - 1;
        } else if (index >= Math.ceil(totalItems / itemsPerView)) {
          index = 0;
        }
      } else {
        index = Math.max(0, Math.min(index, Math.ceil(totalItems / itemsPerView) - 1));
      }

      setCurrentIndex(index);
      const scrollAmount = wrapper.clientWidth * index;
      wrapper.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const wrapper = carouselRef.current;

    if (wrapper) {
      const childElements = wrapper.children;
      for (let i = 0; i < childElements.length; i++) {
        const child = childElements[i] as HTMLElement;
        child.style.flex = `0 0 ${100 / itemsPerView}%`;
      }
    }
  }, [itemsPerView]);

  return (
    <div className={`relative ${className}`}>
      <div ref={carouselRef} className="flex transition-transform duration-500 overflow-hidden">
        {children}
      </div>
      {options?.nav && (
        <>
          <button
            onClick={() => goToSlide(currentIndex - 1)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            &larr;
          </button>
          <button
            onClick={() => goToSlide(currentIndex + 1)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            &rarr;
          </button>
        </>
      )}
      {options?.dots && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: Math.ceil(totalItems / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CarouselWrapper;