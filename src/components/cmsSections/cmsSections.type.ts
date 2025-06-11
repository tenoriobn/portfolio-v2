import { AboutMeSectionBlockRecord } from './AboutMeSection/aboutme.type';
import { ContactSectionBlockRecord } from './ContactSection/contact.type';
import { ExperienceSectionBlockRecord } from './ExperienceSection/experience.type';
import { FooterBlockRecord } from './Footer/footer.type';
import { HeaderBlockRecord } from './Header/header.type';
import { HeroSectionBlockRecord } from './HeroSection/heroSection.type';
import { ProjectsSectionBlockRecord } from './ProjectsSection/projects.type';
import { SkillsSectionBlockRecord } from './SkillsSection/skills.type';

export type CMSSectionsMap = {
  HeaderBlockRecord: React.FC<HeaderBlockRecord>;
  HeroSectionBlockRecord: React.FC<HeroSectionBlockRecord>;
  SkillsSectionBlockRecord: React.FC<SkillsSectionBlockRecord>;
  ProjectsSectionBlockRecord: React.FC<ProjectsSectionBlockRecord>;
  AboutMeSectionBlockRecord: React.FC<AboutMeSectionBlockRecord>;
  ExperienceSectionBlockRecord: React.FC<ExperienceSectionBlockRecord>;
  ContactSectionBlockRecord: React.FC<ContactSectionBlockRecord>;
  FooterBlockRecord: React.FC<FooterBlockRecord>;
};
