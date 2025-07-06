import { useQuery, useQueryClient } from '@tanstack/react-query';
import { get } from 'lodash';
import { useRouter } from 'next/router';
import { PageContentBlock } from 'src/sections/cmsSections.type';

export function useCMSContent(pageName = 'landingPage') {
  const { locale } = useRouter();
  const queryClient = useQueryClient();

  const { data } = useQuery(['cmsContent', locale], {
    initialData: () => queryClient.getQueryData(['cmsContent', locale]),
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const pageContent = get(data, `${pageName}.pageContent`, []) as PageContentBlock[];
  return pageContent;
}
