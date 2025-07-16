import React, { useRef } from 'react';
import MenuToggle from './MenuToggle';
import Navbar from './Navbar';
import useMenuToggle from './MenuToggle/useMenuToggle';
import { useClickOutside } from 'src/hook';

export default function Menu() {
  const { closeMenu } = useMenuToggle();
  const navBarRef = useRef<HTMLDivElement>(null);
  useClickOutside(navBarRef, closeMenu);

  return (
    <div ref={navBarRef}>
      <MenuToggle />
      <Navbar />
    </div>
  );
}
