'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './FaithStoriesCarousel.css';

const testimonials = [
  {
    text: `"Faith has helped me overcome so many challenges in my life. When I was diagnosed with a chronic illness, my faith gave me the strength to persevere and find healing."`,
    author: 'Anonymous',
    image: 'https://i.pravatar.cc/40?img=1',
  },
  {
    text: `"I was at a crossroads in my career when I attended the Faith Conference last year. The teachings helped me trust God’s direction, and I’ve since started a business that’s blessing many lives."`,
    author: 'Anonymous',
    image: 'https://i.pravatar.cc/40?img=2',
  },
  {
    text: `"After years of financial struggles, I applied the principles of faith I learned at this conference. Within months, unexpected opportunities opened up and my family is now debt-free!"`,
    author: 'Anonymous',
    image: 'https://i.pravatar.cc/40?img=3',
  },
  {
    text: `"My child was going through a rough patch in school and we felt hopeless. Through faith and prayer, not only did things turn around, but she’s now thriving."`,
    author: 'Kelechi M.',
    image: 'https://i.pravatar.cc/40?img=4',
  },
  {
    text: `"Losing my job was devastating, but faith reminded me it was a redirection, not a rejection. I'm now in a career I love more than I could have imagined."`,
    author: 'Tomi A.',
    image: 'https://i.pravatar.cc/40?img=5',
  },
  {
    text: `"We were told we couldn’t have children. But we held onto our faith. Today, we have two beautiful daughters who are constant reminders of God’s faithfulness."`,
    author: 'Anonymous',
    image: 'https://i.pravatar.cc/40?img=6',
  },
  {
    text: `"Faith didn’t just change my situation, it changed *me*. I’ve learned to live with peace and purpose even when things are tough."`,
    author: 'Michael I.',
    image: 'https://i.pravatar.cc/40?img=7',
  },
];

export default function FaithStoriesCarousel() {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      if (carouselRef.current && !isHovered) {
        const carousel = carouselRef.current;
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

        if (carousel.scrollLeft + 10 >= maxScrollLeft) {
          carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carousel.scrollBy({
            left: carousel.offsetWidth,
            behavior: 'smooth',
          });
        }
      }
    }, 5000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [isHovered]);

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const offset =
      direction === 'left'
        ? -carouselRef.current.offsetWidth
        : carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section
      id="stories"
      className="faith-carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="carousel-title">Faith Inspired Stories</h2>
      <p className="carousel-subtitle">
        Real stories of faith transforming lives around the world
      </p>
      <div className="carousel-underline" />

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={() => scroll('left')}>
          <ChevronLeft size={24} />
        </button>
        <div className="carousel-track" ref={carouselRef}>
          {testimonials.map((story, index) => (
            <div className="carousel-card" key={index}>
              <p className="carousel-text">{story.text}</p>
              <div className="carousel-author">
                <img src={story.image} alt={story.author} className="author-avatar" />
                <span>- {story.author}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={() => scroll('right')}>
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
