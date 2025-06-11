import { useGetCMSContent } from 'src/provider/useGetCMSContent';
import { CMSSectionData, CMSSectionRenderProps } from './cmsSectionRender.types';
import { cmsSections } from '../cmsSections';

export function CMSSectionRender({ pageName, year }: CMSSectionRenderProps) {
  const sections: CMSSectionData[] = useGetCMSContent(`${pageName}.pageContent`);

  return sections.map(({ componentName, id, ...sectionProps }) => {
    const Component = cmsSections[componentName];
    if(!Component) return null;

    return <Component key={id} year={year} {...sectionProps} />;
  });
}