import { useEffect, useRef, useState } from 'react';

/**
 * useInView — tiny IntersectionObserver hook.
 * Returns a ref to attach to an element and a boolean
 * that flips to true once the element scrolls into view.
 *
 * @param {object} options - IntersectionObserver options
 * @param {boolean} once - if true, stays true after first reveal (default true)
 */
export function useInView(options = { threshold: 0.25 }, once = true) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (once) observer.unobserve(el);
      } else if (!once) {
        setInView(false);
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
}

/**
 * useScrollProgress — tracks scroll progress (0 to 1) through a container element.
 * Used for the mission progress bar on Page 1.
 */
export function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        setProgress(1);
        return;
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(scrolled / total);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return progress;
}
