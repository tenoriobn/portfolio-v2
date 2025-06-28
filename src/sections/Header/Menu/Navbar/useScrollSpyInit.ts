import { useEffect, useState } from 'react';
import { scrollSpy } from 'react-scroll';

export default function useScrollSpyInit() {
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('ContactSectionBlockRecord');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.5;
        setIsContactVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {isContactVisible};
}
