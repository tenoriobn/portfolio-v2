export const handleScrollAfterExpand = (
  experienceId: string, refs: React.RefObject<Record<string, HTMLDivElement | null>>
) => {
  
  const card = refs.current[experienceId];
  if (!card) return;

  const { top, bottom } = card.getBoundingClientRect();
  const viewport = window.innerHeight;
  const margin = 20;
  const offsetTop = 88;
  const offsetBottom = 24;

  const above = top < margin + offsetTop;
  const below = bottom > viewport - margin;

  if (!above && !below) return;

  const scrollTo = above
    ? window.scrollY + top - (margin + offsetTop)
    : window.scrollY + bottom - viewport + offsetBottom;

  window.scrollTo({ top: scrollTo, behavior: 'smooth' });
};