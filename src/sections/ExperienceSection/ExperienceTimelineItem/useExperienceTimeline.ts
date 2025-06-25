import { useRef, useState } from 'react';
import { useCMSSection } from 'src/hook';

export const useExperienceTimeline = () => {
  const { experienceContent } = useCMSSection('ExperienceSectionBlockRecord');

  const firstExperienceId = experienceContent.experiencies.length > 0 ? experienceContent.experiencies[0].id : null;

  const [expandedExperienceIds, setExpandedExperienceIds] = useState<string[]>(
    firstExperienceId ? [firstExperienceId] : []
  );

  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleExperienceExpansion = (experienceId: string) => {
    setExpandedExperienceIds(prevIds =>  
      prevIds.includes(experienceId)
        ? prevIds.filter(id => id !== experienceId)
        : [...prevIds, experienceId]
    );

    setTimeout(() => {
      const el = cardRefs.current[experienceId];
      if (el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        const isFullyVisible = rect.bottom <= windowHeight && rect.top >= 98;

        if (!isFullyVisible) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }, 100);
  };

  const isExperienceExpanded = (experienceId: string) => expandedExperienceIds.includes(experienceId);

  return {
    experiences: experienceContent.experiencies,
    expandedExperienceIds,
    toggleExperienceExpansion,
    isExperienceExpanded,
    cardRefs
  };
};