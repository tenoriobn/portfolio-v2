import { PageContentBlock } from 'src/screens/cmsSections.type';

export interface HomeProps {
  cmsData: {
    landingPage: {
      pageContent: PageContentBlock[];
    };
  }
  locale: string;
}
