import React, { useRef } from 'react';
import MobileMenuToggle from './MobileMenuToggle';
import Navbar from './Navbar';
import useMenuToggle from './MobileMenuToggle/useMenuToggle';
import { useClickOutside } from 'src/hook';

export default function Menu() {
  const { closeMenu } = useMenuToggle();
  const navBarRef = useRef<HTMLDivElement>(null);
  useClickOutside(navBarRef, closeMenu);

  return (
    <div ref={navBarRef}>
      <MobileMenuToggle />
      <Navbar />
    </div>
  );
}
