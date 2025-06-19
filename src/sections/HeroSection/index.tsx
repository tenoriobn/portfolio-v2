import { useCMSSection } from 'src/hook';

export default function HeroSection() {
  const { highlightFixedText } = useCMSSection('HeroSectionBlockRecord');

  return (
    <div>{highlightFixedText}</div>
  );
}
