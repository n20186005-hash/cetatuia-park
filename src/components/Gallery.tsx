'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useState, useCallback, useLayoutEffect, useRef } from 'react';

const photos = [
  { src: '/gallery/images (1).jpg', alt: 'Reference image — location unverified' },
  { src: '/gallery/images (2).jpg', alt: 'Reference image — location unverified' },
  { src: '/gallery/images (3).jpg', alt: 'Reference image — location unverified' },
  { src: '/gallery/images (4).jpg', alt: 'Reference image — location unverified' },
  { src: '/gallery/images (5).jpg', alt: 'Reference image — location unverified' },
  { src: '/gallery/images (6).jpg', alt: 'Reference image — location unverified' },
  { src: '/gallery/images (7).jpg', alt: 'Reference image — location unverified' },
  { src: '/gallery/images (8).jpg', alt: 'Reference image — location unverified' },
  { src: '/gallery/images (9).jpg', alt: 'Reference image — location unverified' },
  { src: '/gallery/images (10).jpg', alt: 'Reference image — location unverified' },
  { src: '/gallery/images (11).jpg', alt: 'Reference image — location unverified' },
  { src: '/gallery/images (12).jpg', alt: 'Reference image — location unverified' },
];

export default function Gallery() {
  const t = useTranslations('gallery');
  const locale = useLocale();
  const labels = locale === 'zh'
    ? { open: '打开图片', close: '关闭图片查看器', previous: '上一张图片', next: '下一张图片' }
    : { open: 'Open photo', close: 'Close lightbox', previous: 'Previous photo', next: 'Next photo' };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, []);

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!isLightboxOpen || !dialog) return;

    const body = document.body;
    const root = document.documentElement;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const opener = openerRef.current;
    const bodyStyles = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      width: body.style.width,
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    };
    const rootOverflow = root.style.overflow;
    const rootScrollBehavior = root.style.scrollBehavior;
    const scrollbarWidth = window.innerWidth - root.clientWidth;
    const paddingRight = window.getComputedStyle(body).paddingRight;

    // Fix the body at its visual position, including on mobile browsers.
    Object.assign(body.style, {
      position: 'fixed', top: `-${scrollY}px`, left: `-${scrollX}px`,
      width: '100%', overflow: 'hidden',
      paddingRight: `calc(${paddingRight} + ${scrollbarWidth}px)`,
    });
    root.style.overflow = 'hidden';
    dialog.showModal();
    closeButtonRef.current?.focus({ preventScroll: true });

    return () => {
      // Closing the native modal makes the page focusable before restoring focus.
      if (dialog.open) dialog.close();
      Object.assign(body.style, bodyStyles);
      root.style.overflow = rootOverflow;
      root.style.scrollBehavior = 'auto';
      if (opener?.isConnected) opener.focus({ preventScroll: true });
      window.scrollTo(scrollX, scrollY);
      root.style.scrollBehavior = rootScrollBehavior;
    };
  }, [isLightboxOpen]);

  return (
    <>
      <section id="gallery" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('title')}
          </h2>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
          <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {photos.map((photo, i) => (
                <button
                  key={i}
                  type="button"
                  aria-haspopup="dialog"
                  aria-label={`${labels.open}: ${t('reference')} ${i + 1}`}
                  className={`gallery-item relative group cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
                  onClick={(event) => {
                    openerRef.current = event.currentTarget;
                    setCurrentIndex(i);
                    openLightbox();
                  }}
                >
                  <img
                    src={photo.src}
                    alt={`${t('reference')} ${i + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                    style={{ minHeight: i === 0 ? '400px' : '180px' }}
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors rounded-lg flex items-end">
                    <span className="text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {`${t('reference')} ${i + 1}`} 
                    </span>
                  </span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={(event) => { openerRef.current = event.currentTarget; goToPrevious(); openLightbox(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors"
              aria-label={labels.previous}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={(event) => { openerRef.current = event.currentTarget; goToNext(); openLightbox(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors"
              aria-label={labels.next}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div className="flex justify-center mt-6 gap-4 items-center">
              <a
                href="https://maps.app.goo.gl/Pwhx2HcrSHAQo31D9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
                style={{ color: 'var(--accent)' }}
              >
                {t('viewAll')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <dialog
          ref={dialogRef}
          aria-modal="true"
          aria-label={t('title')}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          style={{ margin: 0, padding: 0, border: 0, width: '100%', height: '100%', maxWidth: 'none', maxHeight: 'none', overflow: 'hidden', overscrollBehavior: 'contain' }}
          onClick={(event) => { if (event.target === event.currentTarget) closeLightbox(); }}
          onCancel={(event) => { event.preventDefault(); closeLightbox(); }}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              event.preventDefault();
              closeLightbox();
            } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
              event.preventDefault();
              if (event.key === 'ArrowLeft') goToPrevious(); else goToNext();
            } else if (event.key === 'Tab') {
              const buttons = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('button:not([disabled])'));
              const first = buttons[0];
              const last = buttons[buttons.length - 1];
              if (event.shiftKey && (document.activeElement === first || document.activeElement === event.currentTarget)) {
                event.preventDefault(); last?.focus();
              } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault(); first?.focus();
              }
            }
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label={labels.close}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label={labels.previous}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <img
            src={photos[currentIndex].src}
            alt={`${t('reference')} ${currentIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            aria-label={labels.next}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div aria-live="polite" aria-atomic="true" className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {photos.length}
          </div>
        </dialog>
      )}
    </>
  );
}
