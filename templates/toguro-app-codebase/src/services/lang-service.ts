import en from '@assets/lang/en.json';
import pt from '@assets/lang/pt.json';

const getLang = () => navigator.language || (navigator.languages || ['en'])[0];

const LangService = {
  locale: getLang,
  messages: { en: en, pt: pt } as never,
  get: (label: string) => {
    const lang = (LangService.locale().split('-') || ['en'])[0];
    return LangService.messages[lang][label] || label;
  }
};

export const useLang = () => {
  const $t = (label: string) => LangService.get(label);
  return {
    $t
  }
}
