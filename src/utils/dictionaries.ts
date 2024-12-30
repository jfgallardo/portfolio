import { Dictionary, langParam } from '@/types/types';
import 'server-only';

const dictionaries: Record<langParam, () => Promise<Dictionary>> = {
  'en-US': () => import('../dictionaries/en.json').then((module) => module.default),
  'es-ES': () => import('../dictionaries/es.json').then((module) => module.default),
  'pt-BR': () => import('../dictionaries/pt.json').then((module) => module.default),
};

export const getDictionary = async (locale: langParam): Promise<Dictionary> => {
  if (!dictionaries[locale]) {
    throw new Error(`Locale ${locale} is not supported.`);
  }

  return dictionaries[locale]();
};
