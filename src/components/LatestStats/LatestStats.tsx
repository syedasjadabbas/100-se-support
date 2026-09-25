import React, { useState, useEffect, useRef } from 'react';
import './LatestStats.css';

interface StatItem {
  id: string;
  title: string;
  targetValue: number;
  suffix: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: 'amount',
    title: 'Amount Donated',
    targetValue: 10,
    suffix: 'M+ PKR',
  },
  {
    id: 'monthly',
    title: 'Monthly Cases',
    targetValue: 75,
    suffix: '+',
  },
  {
    id: 'flood',
    title: 'Flood Cases',
    targetValue: 15,
    suffix: '+',
  },
  {
    id: 'heatwave',
    title: 'Heatwave Cases',
    targetValue: 5,
    suffix: '+',
  },
];

export const LatestStats: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    amount: 0,
    monthly: 0,
    flood: 0,
    heatwave: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        amount: Math.round(10 * easeOut),
        monthly: Math.round(75 * easeOut),
        flood: Math.round(15 * easeOut),
        heatwave: Math.round(5 * easeOut),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="stats-section" aria-label="Latest Stats">
      <div className="stats-container">
        {/* Section Heading */}
        <h2 className="stats-main-title">Latest Stats</h2>

        {/* Orange Counter Bar with 4 Columns */}
        <div className="stats-counter-bar">
          {STATS_DATA.map((item) => (
            <div key={item.id} className="stats-counter-col">
              <span className="stats-counter-title">{item.title}</span>
              <div className="stats-counter-number-wrapper">
                <span className="stats-counter-number">
                  {counts[item.id]}
                </span>
                <span className="stats-counter-suffix">{item.suffix}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
