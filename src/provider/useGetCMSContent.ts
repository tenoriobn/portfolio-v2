import { useContext } from 'react';
import { CMSContext } from './CMSProvider';
import { get } from 'lodash';

export const useGetCMSContent = (path = '') => {
  const context = useContext(CMSContext);
  if (!context) throw new Error('useGetCMSContent deve ser usado dentro de um CMSProvider');

  const { cmsContent } = context;
  if (path === '') return cmsContent;

  const output = get(cmsContent, path);
  if (!output) throw new Error(`Não foi possível encontrar a chave: "${path}". Reveja sua query e tente novamente!`);

  return output;
};
