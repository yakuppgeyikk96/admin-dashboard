"use client";

import React, { useEffect, useRef } from "react";

interface CounterProps {
  value: number;
  duration?: number;
}

export const Counter = ({ value, duration = 1000 }: CounterProps) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const startValueRef = useRef(0);
  const startTimeRef = useRef(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    startValueRef.current = 0;
    startTimeRef.current = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * value);

      element.textContent = currentValue.toLocaleString("en-US");

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span ref={elementRef}>0</span>;
};
