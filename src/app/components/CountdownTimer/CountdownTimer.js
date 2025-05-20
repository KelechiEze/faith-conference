'use client';
import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
  const targetDate = new Date('2025-06-23T09:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days: days > 0 ? days : 0,
      hours: hours > 0 ? hours : 0,
      minutes: minutes > 0 ? minutes : 0,
      seconds: seconds > 0 ? seconds : 0,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = ['days', 'hours', 'minutes', 'seconds'];

  return (
    <div className="countdown-container">
      <div className="countdown-left">
        <h2>Until Event Start</h2>
        <p>Time Remaining</p>
      </div>
      <div className="countdown-right">
        {units.map((unit, index) => (
          <React.Fragment key={unit}>
            <div className="time-box">
              <div className="time-value">{String(timeLeft[unit]).padStart(2, '0')}</div>
              <div className="time-label">
                {unit === 'days' && 'Days'}
                {unit === 'hours' && 'Hrs'}
                {unit === 'minutes' && 'Mins'}
                {unit === 'seconds' && 'Secs'}
              </div>
            </div>
            {index < units.length - 1 && <div className="colon">:</div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
