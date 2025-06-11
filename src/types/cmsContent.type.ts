import { HeaderBlockRecord } from 'components/cmsSections/Header/header.type';
import { HeroSectionBlockRecord } from 'components/cmsSections/HeroSection/heroSection.type';
import { AboutMeSectionBlockRecord } from 'components/cmsSections/AboutMeSection/aboutme.type';
import { ContactSectionBlockRecord } from 'components/cmsSections/ContactSection/contact.type';
import { ExperienceSectionBlockRecord } from 'components/cmsSections/ExperienceSection/experience.type';
import { FooterBlockRecord } from 'components/cmsSections/Footer/footer.type';
import { ProjectsSectionBlockRecord } from 'components/cmsSections/ProjectsSection/projects.type';
import { SkillsSectionBlockRecord } from 'components/cmsSections/SkillsSection/skills.type';

export interface HomeProps {
  cmsContent: LandingPage;
  year: number;
};
export interface LandingPage {
  pageContent: PageContentBlock[];
}

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