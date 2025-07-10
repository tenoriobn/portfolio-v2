import { get } from 'lodash';
import { useCMSContext } from 'src/provider/CMSContext';
import { PageContentBlock } from 'src/screens/cmsSections.type';

export function useCMSContent(pageName = 'landingPage') {
  const { data } = useCMSContext();
  
  const pageContent = get(data, `${pageName}.pageContent`, []) as PageContentBlock[];
  return pageContent;
}
