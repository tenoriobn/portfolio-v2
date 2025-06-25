import { useEffect } from 'react';
import { scrollSpy } from 'react-scroll';

export default function useScrollSpyInit() {
  useEffect(() => {
    scrollSpy.update();
  }, []);
}
