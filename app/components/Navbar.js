'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';

const LINKS = [
  { label: 'About Me', href: '/about' }, // opens the separate About page
  { label: 'Projects', href: '/#work' }, // scrolls to the Recent Work section (id="work") on the home page
  { label: 'Contact Me', href: '/#contact' }, // scrolls to the last section (id="contact"), or the page bottom
];

const NEAR = 70; // px: how close the cursor must get to a link for its underline to appear
const NAV_HEIGHT = 80; // px: space left above a section so the navbar doesn't cover its heading
const HOME_INTRO_MS = 4700; // home page intro (logo + doors) length; hash scroll waits for it

function distanceToRect(x, y, r) {
  const dx = Math.max(r.left - x, 0, x - r.right);
  const dy = Math.max(r.top - y, 0, y - r.bottom);
  return Math.hypot(dx, dy);
}

const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

export default function Navbar() {
  const refs = useRef([]);
  const pathname = usePathname();
  const lenis = useLenis();
  const [mounted, setMounted] = useState(false);
  const [near, setNear] = useState(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  const scrollToTop = () =>
    lenis
      ? lenis.scrollTo(0, { duration: 1.4, easing: easeOutQuart })
      : window.scrollTo({ top: 0, behavior: 'smooth' });

  // scroll to the very bottom of the page
  const scrollToBottom = (duration = 1.6) => {
    const bottom = document.documentElement.scrollHeight - window.innerHeight;
    if (lenis) {
      lenis.scrollTo(bottom, { duration, easing: easeOutQuart });
    } else {
      window.scrollTo({ top: bottom, behavior: 'smooth' });
    }
  };

  const scrollToTarget = (target, duration) => {
    if (lenis) {
      lenis.scrollTo(target, { offset: -NAV_HEIGHT, duration, easing: easeOutQuart });
    } else {
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // scroll to a "#id" on the home page. If #contact has no element, go to the page bottom.
  const scrollToHash = (hash, duration) => {
    const target = document.querySelector(hash);
    if (target) {
      const distance = Math.abs(target.getBoundingClientRect().top);
      const d = duration ?? Math.min(2, Math.max(0.9, distance / 3000 + 0.7));
      // contact is the last section: land at the very bottom so it is fully visible
      if (hash === '#contact') scrollToBottom(d);
      else scrollToTarget(target, d);
    } else if (hash === '#contact') {
      scrollToBottom(duration ?? 1.6);
    }
  };

  const handleClick = (e, href) => {
    setOpen(false);

    // section links (/#work, /#contact) while already on the home page: smooth scroll
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      scrollToHash(href.replace('/', ''));
    }
    // everything else (like /about, or /#work from another page) is a normal page navigation
  };

  // arriving on the home page from another page with a #section in the link: scroll to it
  // once the home intro has finished (the page can't scroll while the intro plays)
  useEffect(() => {
    if (pathname !== '/') return;
    const hash = window.location.hash;
    if (!hash) return;
    const t = setTimeout(() => scrollToHash(hash, 1.2), HOME_INTRO_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, lenis]);

  // proximity detection
  useEffect(() => {
    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let best = null;
        let bestDist = NEAR;
        refs.current.forEach((el, i) => {
          if (!el) return;
          const d = distanceToRect(e.clientX, e.clientY, el.getBoundingClientRect());
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        setNear((prev) => (prev === best ? prev : best));
      });
    };
    const onLeave = () => setNear(null);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <header
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}
      className={`backdrop-blur-md transition-colors duration-300 ${
        scrolled ? 'border-b border-white/10 bg-black/60' : 'border-b border-transparent bg-black/35'
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 text-white lg:px-[4vw]">
        {/* Logo: home page (or back to the top if already there) */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              scrollToTop();
            }
          }}
          className="text-2xl font-black tracking-tighter text-white"
        >
          portfolio
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((link, i) => {
            const active = near === i || pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  ref={(el) => (refs.current[i] = el)}
                  className={`relative inline-block py-1 text-sm font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                    active ? 'text-white' : 'text-neutral-400'
                  }`}
                >
                  {link.label}
                  <motion.span
                    initial={false}
                    animate={{ scaleX: active ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: active ? 'left' : 'right' }}
                    className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-white"
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-black/70 backdrop-blur-md md:hidden"
          >
            {LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="block px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-neutral-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>,
    document.body
  );
}