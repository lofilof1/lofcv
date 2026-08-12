import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const videoPosters: Record<number, string> = {
  1: '/media/posters/VID-20250522-WA0001.jpg',
  3: '/media/posters/WRSY6502.jpg',
  5: '/media/posters/IMG_6129.jpg',
  7: '/media/posters/DKFB0267.jpg',
  8: '/media/posters/YJGJ7540.jpg',
};

export default function Sports() {
  const { lang, t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const activeMedia = t.sports.items.find((item) => item.id === activeId) ?? null;

  const moveGallery = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const distance = Math.max(track.clientWidth * 0.72, 280);
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 12;
    const atStart = track.scrollLeft <= 12;

    if (direction === 1 && atEnd) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }

    if (direction === -1 && atStart) {
      track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
      return;
    }

    track.scrollBy({ left: distance * direction, behavior: 'smooth' });
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveId(null);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    if (activeMedia) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [activeMedia]);

  useEffect(() => {
    if (paused || activeMedia || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(() => moveGallery(1), 5000);
    return () => window.clearInterval(timer);
  }, [paused, activeMedia]);

  return (
    <section className="section section-light inner-page sports-page">
      <h1 className="sr-only">{t.sports.title}</h1>

      <div className="container sports-gallery-toolbar">
        <span className="sports-gallery-line" />
        <div className="sports-gallery-controls">
          <button
            type="button"
            className="sports-gallery-arrow"
            onClick={() => moveGallery(-1)}
            aria-label={lang === 'tr' ? 'Önceki medya' : 'Previous media'}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className="sports-gallery-arrow"
            onClick={() => moveGallery(1)}
            aria-label={lang === 'tr' ? 'Sonraki medya' : 'Next media'}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="sports-gallery-track"
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {t.sports.items.map((item, index) => (
          <button
            type="button"
            className={`sports-media-trigger ${index % 4 === 0 ? 'sports-media-wide' : ''}`}
            key={item.id}
            onClick={() => setActiveId(item.id)}
            aria-label={item.title}
            aria-haspopup="dialog"
          >
            {item.type === 'video' ? (
              <video
                src={item.src}
                muted
                playsInline
                preload="metadata"
                poster={videoPosters[item.id]}
              />
            ) : (
              <img src={item.src} alt={item.title} loading="lazy" />
            )}
            {item.type === 'video' && <span className="sports-play-indicator" aria-hidden="true"><Play size={19} fill="currentColor" /></span>}
          </button>
        ))}
      </div>

      {activeMedia && (
        <div
          className="sports-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeMedia.title}
          onClick={() => setActiveId(null)}
        >
          <button
            type="button"
            className="sports-lightbox-close"
            onClick={() => setActiveId(null)}
            aria-label={lang === 'tr' ? 'Kapat' : 'Close'}
          >
            <X size={22} />
          </button>
          <div className="sports-lightbox-media" onClick={(event) => event.stopPropagation()}>
            {activeMedia.type === 'video' ? (
              <video src={activeMedia.src} controls autoPlay playsInline />
            ) : (
              <img src={activeMedia.src} alt={activeMedia.title} />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
