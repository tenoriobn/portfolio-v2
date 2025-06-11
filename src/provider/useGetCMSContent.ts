import { useContext } from 'react';
import { CMSContext } from './CMSProvider';
import { get } from 'lodash';
import { LandingPage } from 'src/types/cmsContent.type';

export function useGetCMSContent<T = LandingPage>(path = ''): T {
  const context = useContext(CMSContext);
  if (!context) throw new Error('useGetCMSContent deve ser usado dentro de um CMSProvider');

  const { cmsContent } = context;

  if (path === '') return cmsContent as T;

  const output: T = get(cmsContent, path) as T;

  if (!output) throw new Error(`Não foi possível encontrar a chave: "${path}". Reveja sua query e tente novamente!`);

  return output as T;
}

