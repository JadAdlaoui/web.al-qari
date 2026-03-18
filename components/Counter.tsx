'use client';

import { useEffect, useRef, useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(0);
  const triggered = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    fetch('/api/waitlist')
      .then((r) => r.json())
      .then(({ count: c }) => setCount(c))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          if (count === 0) { setDisplay(0); return; }

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
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count]);

  return <span ref={ref}>{display}</span>;
}
