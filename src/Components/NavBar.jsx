"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import styles from "./NavBar.module.css";
import { VscAccount } from 'react-icons/vsc';

const NAV_ITEMS = [
  { title: "Editorial", path: "editorials", countries: ["Reviewers", "Join-as-Reviewer/Referral", "Peer-Review-Editoral-Policy", ] },
  { title: "Authors", path: "authors", countries: ["Paper-Format", "How-publish-paper", "Author's-Guidelines", "Copyright-Form", "Processing-Charges", "Track-Paper", "Publication-Policy", "Ethics-Policy","Refund-Policy","UGC-Care-List-Journal","Peer-Review-Policy","Scientific-Journal","Journal-For-Engineering-Research","Journal-For-Electrical-Engineering","Journal-For-Computer-Science","Journal-For-Civil-Engineering","Journal-For-Social-Sciences","Terms-and-conditions"] },
  { title: "Conference", path: "conference", countries: ["New-Proposal/Terms", "Special-Issues", "Upcoming-Conferences", ] },

  
  
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  // Handle submenu toggle for mobile
  const handleSubmenuToggle = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.navContainer} ref={navRef}>
      <nav className={styles.navBar} aria-label="Main Navigation">
        {/* Logo */}
        <Link href="/" className={styles.logoLink}>
          <Image
            className={styles.logo}
            src="/gvilogo.png"
            alt="Global Visa Internationals Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={clsx(styles.menu, { [styles.menuOpen]: menuOpen })}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <ul className={clsx(styles.navLinks, { [styles.showMenu]: menuOpen })}>
        <li><Link href="/" title="Home">Home</Link></li>
          <li><Link href="/about-us" title="About Us">Adout</Link></li>

          {/* Dropdown Menus */}
          {NAV_ITEMS.map(({ title, path, countries }) => (
            <li
              key={title}
              className={styles.submenuContainer}
              onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown(title)}
              onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
            >
              <button
                className={styles.submenuToggle}
                aria-expanded={openDropdown === title}
                onClick={() => handleSubmenuToggle(title)}
                title={`${title} research-paper`}
              >
                {title} <FaChevronDown className={clsx(styles.dropdownIcon, { [styles.rotate]: openDropdown === title })} />
              </button>
              <ul className={clsx(styles.submenu, { [styles.submenuOpen]: openDropdown === title })}>
                {countries.map((country) => (
                  <li key={country}>
                    <Link href={`/research-paper/${path}/${country.toLowerCase()}`} title={`${title} research-paper for ${country}`}>
                      {country.replace("-", " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li><Link href="/submit-papers" title="Submit">Submit Paper</Link></li>
          <li><Link href="/career" title="Current Issue">Current Issue</Link></li>
          <li><Link href="/reviews" title="reviews">Reviews</Link></li>

        
          {/* Separate List Items for Login and Register */}
          <li className={styles.User}><VscAccount /></li>


        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
