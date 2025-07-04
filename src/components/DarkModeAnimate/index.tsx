import { useThemeToggle } from 'src/sections/Header/ThemeToggle/useThemeToggle';
import styled from 'styled-components';

const DarkMode = styled.div<{ $isActive: boolean; $position?: string; $background?: string }>`
  position: ${({ $position }) => $position || 'fixed'};
  top: var(--bubble-top, 3.5rem);
  left: var(--bubble-left, 3.5rem);
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  background-color: ${({ $background }) => $background || 'rgb(47, 47, 47)'};
  transform: translate(-50%, -50%) scale(${(props) => (props.$isActive ? 100 : 0)});
  transition: transform 2s ease-in, transform 4s ease-out;
  z-index: 0;
  pointer-events: none;
`;

export default function DarkModeAnimate({ position, background }: { position?: string; background?: string }) {
  const { isDark } = useThemeToggle();
  return <DarkMode $position={position} $isActive={isDark} $background={background} />;
}
