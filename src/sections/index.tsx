import Header from './Header';
import AboutMeSection from './AboutMeSection';
import ContactSection from './ContactSection';
import ExperienceSection from './ExperienceSection';
import Footer from './Footer';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';

export const cmsSections = {
  HeaderBlockRecord: Header,
  HeroSectionBlockRecord: HeroSection,
  SkillsSectionBlockRecord: SkillsSection,
  ProjectsSectionBlockRecord: ProjectsSection,
  AboutMeSectionBlockRecord: AboutMeSection,
  ExperienceSectionBlockRecord: ExperienceSection,
  ContactSectionBlockRecord: ContactSection,
  FooterBlockRecord: Footer
} as const;