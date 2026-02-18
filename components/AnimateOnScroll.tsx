"use client";

import { useEffect, useRef } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function AnimateOnScroll({
  children,
  className = "",
  stagger = false,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (stagger) {
              const children = el.querySelectorAll<HTMLElement>(".fade-up");
              children.forEach((child, i) => {
                setTimeout(() => child.classList.add("visible"), i * 90);
              });
            } else {
              el.classList.add("visible");
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  return (
    <div
      ref={ref}
      className={`${stagger ? "stagger-children" : "fade-up"} ${className}`}
    >
      {children}
    </div>
  );
}
