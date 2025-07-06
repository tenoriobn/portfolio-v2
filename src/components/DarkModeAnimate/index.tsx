import { useThemeToggle } from 'src/sections/Header/ThemeToggle/useThemeToggle';
import styled from 'styled-components';
import { lightTheme } from 'src/styles';
import { useEffect, useState } from 'react';

const DarkMode = styled.div<{ $scaleUp: boolean; $position?: string; $background?: string }>`
  position: ${({ $position }) => $position || 'fixed'};
  top: var(--bubble-top, 3.5rem);
  left: var(--bubble-left, 3.5rem);
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  background-color: ${({ $background }) =>
    lightTheme.colors[$background as keyof typeof lightTheme.colors || 'grey-900']};
  transform: translate(-50%, -50%) scale(${(props) => (props.$scaleUp ? 100 : 0)});
  transition: transform 2s cubic-bezier(.32, .4, 1, .6);
  z-index: 0;
  pointer-events: none;
`;

export default function DarkModeAnimate({ position, background }: { position?: string; background?: string }) {
  const { isDark } = useThemeToggle();
  const [scaleUp, setScaleUp] = useState(false);

  useEffect(() => {
    if (!isDark) {
      requestAnimationFrame(() => setScaleUp(true));
    } else {
      setScaleUp(false);
    }
  }, [isDark]);

  return <DarkMode $position={position} $background={background} $scaleUp={scaleUp} />;
}
