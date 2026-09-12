import React, { useState, useEffect } from 'react';
import './LatestStats.css';

interface StatItem {
  id: string;
  title: string;
  targetValue: number;
  initialValue: number;
  isDecimal?: boolean;
  suffix: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: 'amount',
    title: 'Amount Donated',
    initialValue: 2,
    targetValue: 4.5,
    isDecimal: true,
    suffix: ' M Pkr',
  },
  {
    id: 'monthly',
    title: 'Monthly Cases',
    initialValue: 0,
    targetValue: 45,
    suffix: '+',
  },
  {
    id: 'flood',
    title: 'Flood Cases',
    initialValue: 0,
    targetValue: 15,
    suffix: '+',
  },
  {
    id: 'heatwave',
    title: 'Heatwave Cases',
    initialValue: 0,
    targetValue: 4,
    suffix: '+',
  },
];

export const LatestStats: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    amount: 2.0,
    monthly: 0,
    flood: 0,
    heatwave: 0,
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 40;
    const intervalTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const progress = Math.min(stepCount / steps, 1);
      const eased = 1 - (1 - progress) * (1 - progress);

      setCounts({
        amount: parseFloat((2 + (4.5 - 2) * eased).toFixed(1)),
        monthly: Math.round(45 * eased),
        flood: Math.round(15 * eased),
        heatwave: Math.round(4 * eased),
      });

      if (progress >= 1) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="stats-section" aria-label="Latest Stats">
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
                  {item.isDecimal ? counts[item.id].toFixed(1) : counts[item.id]}
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
