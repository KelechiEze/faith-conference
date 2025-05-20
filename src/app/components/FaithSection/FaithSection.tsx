'use client';
import React from 'react';
import './FaithSection.css';

const FaithSection = () => {
  return (
    <section className="faith-section">
      <h2 className="faith-title">Changing <span>Your World!</span></h2>

      <div className="faith-cards">
        <div className="faith-card">
          <div className="quote-mark">&ldquo;</div>
          <p className="faith-verse">
            <em>
              Now faith is the substance of things hoped for, the evidence of things not seen.
            </em>
          </p>
          <p className="faith-ref"><strong>Hebrews 11:1</strong></p>
        </div>

        <div className="faith-card">
          <div className="quote-mark">&ldquo;</div>
          <p className="faith-verse">
            <em>
              For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith.
            </em>
          </p>
          <p className="faith-ref"><strong>1 John 5:4</strong></p>
        </div>
      </div>

      <p className="faith-description">
        Faith is the catalyst that transforms dreams into reality, challenges into triumphs, and ordinary people into extraordinary leaders. At the Faith Conference, you&apos;ll discover how faith can become your greatest asset in changing your world—personally, professionally, and spiritually.
      </p>
    </section>
  );
};

export default FaithSection;
