"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/* ======================================================================
   FOOTER  (put this file in your components folder, then use <Footer /> at
   the bottom of any page, e.g. under the Recent Work section)
   Edit everything in the DATA section. The layout code never needs touching.

   Responsive layout:
   - phone:   everything stacked in one column (brand + contact, then links)
   - tablet:  two columns
   - desktop: three columns in one row (the 3rd stays empty while
              "Helpful Links" is commented out)
   ====================================================================== */

/* ============================== DATA ============================== */

const BRAND = {
  logo: "Aarchi Rai", // or replace the text with an <img> in the Footer below
  tagline: "", // e.g. "Your Tagline here" (hidden while empty)
};

const CONTACT = {
  phone: "+91 98731 06862",
  email: "aarchirai3@gmail.com",
};

const INFORMATION = [
  { label: "About Us", href: "/about" },
  // { label: "More Search", href: "/#work" },
  // { label: "Blog", href: "/" },
  // { label: "Testimonials", href: "/" },
];

const HELPFUL_LINKS = [
  // { label: "Services", href: "/" },
  // { label: "Supports", href: "/" },
];

/* ============================== COLORS ============================== */

const ORANGE = "#f7941d";

/* ============================== ICONS ============================== */

function Icon({ children, className = "h-4 w-4", fill = "none" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const PhoneIcon = (p) => (
  <Icon {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Icon>
);

const MailIcon = (p) => (
  <Icon {...p}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </Icon>
);

/* ============================== PIECES ============================== */

function ColumnTitle({ children, className = "" }) {
  return (
    <h3
      className={`mb-3 text-base font-medium sm:mb-4 sm:text-xl ${className}`}
      style={{ color: ORANGE }}
    >
      {children}
    </h3>
  );
}

function LinkList({ items }) {
  return (
    <ul className="space-y-1 sm:space-y-1.5">
      {items.map((l) => (
        <li key={l.label}>
          {/* py-1.5 gives a comfortable tap target on phones */}
          <Link
            href={l.href}
            className="inline-block py-1.5 text-sm text-neutral-100 transition-colors hover:text-[#f7941d] sm:text-[15px]"
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ============================== FOOTER ============================== */

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-x-clip bg-black text-white"
    >
      <div className="mx-auto max-w-[1400px] px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:px-20">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-[1.25fr_1fr_1fr] lg:gap-10">
          {/* brand + contact */}
          <div className="min-w-0">
            <p className="text-2xl font-bold leading-none">{BRAND.logo}</p>
            {BRAND.tagline && (
              <p className="mt-1.5 text-[11px] text-neutral-300">{BRAND.tagline}</p>
            )}

            <h3 className="mb-3 mt-7 text-base font-medium sm:mt-9" style={{ color: ORANGE }}>
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-neutral-100">
              <li className="flex items-center gap-3 sm:gap-4">
                <PhoneIcon className="h-4 w-4 shrink-0" />
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="py-1 transition-colors hover:text-[#f7941d]"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <MailIcon className="h-4 w-4 shrink-0" />
                {/* break-all stops a long email from pushing the page sideways on small phones */}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="min-w-0 break-all py-1 transition-colors hover:text-[#f7941d]"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          {/* information */}
          <div className="min-w-0">
            <ColumnTitle>Information</ColumnTitle>
            <LinkList items={INFORMATION} />
          </div>

          {/* helpful links */}
          {/* <div className="min-w-0">
            <ColumnTitle>Helpful Links</ColumnTitle>
            <LinkList items={HELPFUL_LINKS} />
          </div> */}
        </div>
      </div>
    </motion.footer>
  );
}