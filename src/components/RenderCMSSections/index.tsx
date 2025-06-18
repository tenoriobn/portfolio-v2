import { useQueryClient } from '@tanstack/react-query';
import { get } from 'lodash';
import { PageContentBlock } from '../cmsSections/cmsSections.type';
import { cmsSections } from '../cmsSections';
import { useRouter } from 'next/router';

export default function RenderCMSSections() {
  const { locale } = useRouter();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(['cmsContent', locale]);
  const pageContent = get(data, 'landingPage.pageContent', []) as PageContentBlock[];

  return (
    <>
      {pageContent.map((section) => {
        const Component = cmsSections[section.componentName as keyof typeof cmsSections] as React.FC<unknown>;
        if (!Component) return null;
        return <Component key={section.id} />;
      })}
    </>
  );
}
