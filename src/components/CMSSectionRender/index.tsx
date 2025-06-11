import { useGetCMSContent } from 'src/provider/useGetCMSContent';
import { cmsSections } from '../cmsSections';
import { CMSSectionRenderProps } from './cmsSectionRender.types';
import { PageContentBlock } from 'src/types/cmsContent.type';
import { CMSSectionsMap } from '../cmsSections/cmsSections.type';

export function CMSSectionRender({ pageName }: CMSSectionRenderProps) {
  const sections: PageContentBlock[] = useGetCMSContent(`${pageName}.pageContent`);

  return sections.map(({ componentName, id, ...sectionProps }) => {
    const Component = cmsSections[componentName as keyof CMSSectionsMap] as React.FC<unknown>;

    if(!Component) return null;

    return <Component key={id} {...sectionProps} />;
  });
}