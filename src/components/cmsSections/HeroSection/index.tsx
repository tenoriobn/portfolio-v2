import { useCMSSection } from '../useCMSSection.ts';

export default function HeroSection() {
  const { highlightFixedText } = useCMSSection('HeroSectionBlockRecord');

  return (
    <div>{highlightFixedText}</div>
  );
}
