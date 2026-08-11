import { useState, useEffect } from 'react';
import { Play, Image as ImageIcon, X, Trophy, Maximize2, Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Sports() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'image' | 'video' | 'dunk'>('all');
  const [activeMedia, setActiveMedia] = useState<typeof t.sports.items[number] | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveMedia(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const items = t.sports.items.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'image') return item.type === 'image';
    if (filter === 'video') return item.type === 'video';
    if (filter === 'dunk') return item.category === 'dunk';
    return true;
  });

  return (
    <section className="section section-light inner-page sports-page">
      <div className="container">
        <p className="eyebrow dark">
          <span />
          {t.sports.eyebrow}
        </p>

        <div className="section-heading page-heading">
          <div>
            <h1>{t.sports.title}</h1>
            <p>{t.sports.subtitle}</p>
          </div>
          <span className="section-number">04</span>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid sports-stats">
          {t.sports.stats.map((stat, idx) => (
            <div className="stat" key={idx}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Filter Pills */}
        <div className="sports-filters" style={{ margin: '35px 0 25px', display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--muted-light)', display: 'flex', alignItems: 'center', gap: '6px', marginRight: '8px' }}>
            <Filter size={14} /> Filtrele:
          </span>
          <button
            className={`button button-small ${filter === 'all' ? 'active-filter' : 'outline-filter'}`}
            onClick={() => setFilter('all')}
          >
            {t.sports.filterAll}
          </button>
          <button
            className={`button button-small ${filter === 'dunk' ? 'active-filter' : 'outline-filter'}`}
            onClick={() => setFilter('dunk')}
          >
            <Trophy size={14} style={{ marginRight: '4px' }} />
            {t.sports.filterDunk}
          </button>
          <button
            className={`button button-small ${filter === 'video' ? 'active-filter' : 'outline-filter'}`}
            onClick={() => setFilter('video')}
          >
            <Play size={14} style={{ marginRight: '4px' }} />
            {t.sports.filterVideos}
          </button>
          <button
            className={`button button-small ${filter === 'image' ? 'active-filter' : 'outline-filter'}`}
            onClick={() => setFilter('image')}
          >
            <ImageIcon size={14} style={{ marginRight: '4px' }} />
            {t.sports.filterPhotos}
          </button>
        </div>

        {/* Media Grid */}
        <div className="sports-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {items.map((item) => (
            <article
              key={item.id}
              className="sports-card"
              onClick={() => setActiveMedia(item)}
              style={{
                cursor: 'pointer',
                borderRadius: '8px',
                overflow: 'hidden',
                background: 'var(--paper-2)',
                border: '1px solid var(--line-light)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                className="sports-card-media"
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 10',
                  background: '#000',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    muted
                    playsInline
                    preload="metadata"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                )}

                {/* Badge Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(20, 37, 31, 0.85)',
                    backdropFilter: 'blur(6px)',
                    color: '#fff',
                    padding: '4px 10px',
                    borderRadius: '100px',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.tag}
                </div>

                {/* Media Icon Badge */}
                <div
                  style={{
                    position: 'absolute',
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: 'var(--ink)',
                    display: 'grid',
                    placeItems: 'center',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                    transition: 'transform 0.25s ease',
                  }}
                  className="sports-card-badge"
                >
                  {item.type === 'video' ? <Play size={20} fill="currentColor" style={{ marginLeft: '2px' }} /> : <Maximize2 size={20} />}
                </div>
              </div>

              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ margin: '0 0 8px', fontSize: '18px', fontWeight: 600, color: 'var(--ink)' }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted-light)', lineHeight: 1.6 }}>{item.caption}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal Player */}
      {activeMedia && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(10, 18, 15, 0.92)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setActiveMedia(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              background: 'var(--ink)',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveMedia(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#fff',
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              aria-label="Kapat"
            >
              <X size={22} />
            </button>

            {/* Media Content */}
            <div style={{ width: '100%', maxHeight: '68vh', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {activeMedia.type === 'video' ? (
                <video
                  src={activeMedia.src}
                  controls
                  autoPlay
                  style={{ width: '100%', maxHeight: '68vh', objectFit: 'contain' }}
                />
              ) : (
                <img
                  src={activeMedia.src}
                  alt={activeMedia.title}
                  style={{ width: '100%', maxHeight: '68vh', objectFit: 'contain' }}
                />
              )}
            </div>

            {/* Modal Info */}
            <div style={{ padding: '24px 28px', background: 'var(--ink)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <span
                  style={{
                    background: 'var(--mint)',
                    color: 'var(--ink)',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: '100px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {activeMedia.tag}
                </span>
              </div>
              <h2 style={{ margin: '0 0 8px', fontSize: '22px', fontWeight: 600 }}>{activeMedia.title}</h2>
              <p style={{ margin: 0, color: 'var(--muted-dark)', fontSize: '14px', lineHeight: 1.6 }}>{activeMedia.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
