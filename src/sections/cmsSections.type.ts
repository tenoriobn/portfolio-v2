import { AboutMeSectionBlockRecord } from './AboutSection/aboutme.type';
import { ContactSectionBlockRecord } from './ContactSection/ContactSection.type';
import { ExperienceSectionBlockRecord } from './ExperienceSection/experience.type';
import { FooterBlockRecord } from './Footer/footer.type';
import { HeaderBlockRecord } from './Header/header.type';
import { HeroSectionBlockRecord } from './HeroSection/heroSection.type';
import { ProjectsSectionBlockRecord } from './ProjectsSection/projects.type';
import { SkillsSectionBlockRecord } from './SkillsSection/skills.type';

export type ComponentNameMap = {
  HeaderBlockRecord: HeaderBlockRecord;
  HeroSectionBlockRecord: HeroSectionBlockRecord;
  SkillsSectionBlockRecord: SkillsSectionBlockRecord;
  ProjectsSectionBlockRecord: ProjectsSectionBlockRecord;
  AboutMeSectionBlockRecord: AboutMeSectionBlockRecord;
  ExperienceSectionBlockRecord: ExperienceSectionBlockRecord;
  ContactSectionBlockRecord: ContactSectionBlockRecord;
  FooterBlockRecord: FooterBlockRecord;
};

export type PageContentBlock = 
  HeaderBlockRecord | 
  HeroSectionBlockRecord | 
  SkillsSectionBlockRecord |
  ProjectsSectionBlockRecord | 
  AboutMeSectionBlockRecord | 
  ExperienceSectionBlockRecord | 
  ContactSectionBlockRecord | 
  FooterBlockRecord
;