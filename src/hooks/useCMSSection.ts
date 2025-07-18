import { useCMSContent } from 'src/hooks';
import { ComponentNameMap } from 'src/screens/cmsSections.type';

export function useCMSSection<K extends keyof ComponentNameMap>(
  componentName: K,
  pageName = 'landingPage'
): ComponentNameMap[K] {
  const pageContent = useCMSContent(pageName);

  const section = pageContent.find(
    (block) => block.componentName === componentName
  ) as ComponentNameMap[K] | undefined;

  if (!section) {
    console.warn(`Seção ${componentName} não encontrada na página ${pageName}`);
    return {} as ComponentNameMap[K]; 
  }

  return section;
}
