import { useQueryClient } from '@tanstack/react-query';
import { get } from 'lodash';
import { ComponentNameMap, PageContentBlock } from './cmsSections.type';

export function useCMSSection<K extends keyof ComponentNameMap>(
  componentName: K,
  pageName = 'landingPage'
): ComponentNameMap[K] {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(['cmsContent']);
  const pageContent = get(data, `${pageName}.pageContent`, []) as PageContentBlock[];

  const section = pageContent.find(
    (block) => block.componentName === componentName
  ) as ComponentNameMap[K];

  if (!section) {
    throw new Error(`Seção ${componentName} não encontrada na página ${pageName}`);
  }

  return section;
}