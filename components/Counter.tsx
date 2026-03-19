'use client';

import { useEffect, useRef, useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState<number | null>(null);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    fetch('/api/waitlist')
      .then((r) => r.json())
      .then(({ count: c }) => setCount(c))
      .catch(() => setCount(0));
  }, []);

  useEffect(() => {
    if (count === null) return;

    const el = ref.current;
    if (!el) return;

    if (count === 0) { setDisplay(0); return; }

    const visible = el.getBoundingClientRect().top < window.innerHeight;

    const animate = () => {
      const duration = 1800;
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(2, -10 * p);
        setDisplay(Math.floor(eased * count));
        if (p < 1) requestAnimationFrame(step);
        else setDisplay(count);
      };
      requestAnimationFrame(step);
    };

    if (visible) {
      animate();
    } else {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            animate();
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }
  }, [count]);

  return <span ref={ref}>{display}</span>;
}
