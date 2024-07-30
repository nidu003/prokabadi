import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar bg-black text-white py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="navbar-nav flex space-x-6">
          <li className="nav-item">
            <Link href="/" legacyBehavior>
              <a className="nav-link font-bold text-xl">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" legacyBehavior>
              <a className="nav-link-about font-bold text-xl">About Us</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/gallery" legacyBehavior>
              <a className="nav-link font-bold text-xl">Gallery</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/event" legacyBehavior>
              <a className="nav-link font-bold text-xl">Event</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" legacyBehavior>
              <a className="nav-link font-bold text-xl">Contact Us</a>
            </Link>
          </li>
        </ul>
        <ul className="social-links flex space-x-6">
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
