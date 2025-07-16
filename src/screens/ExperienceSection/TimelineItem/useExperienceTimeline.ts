import { useRef, useState } from 'react';
import { useCMSSection } from 'src/hooks';

export const useExperienceTimeline = () => {
  const { experienceContent } = useCMSSection('ExperienceSectionBlockRecord');

  const initialExpanded = experienceContent.experiencies?.[0]?.id ? [experienceContent.experiencies[0].id] : [];

  const [expandedIds, setExpandedIds] = useState<string[]>(() => initialExpanded);

  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const isExpanded = (id: string) => expandedIds.includes(id);

  return {
    experiences: experienceContent.experiencies,
    expandedIds,
    toggleExpand,
    isExpanded,
    refs
  };
};
