import { ref } from 'vue';

import tr from './messages/tr';
import type { Messages } from './messages/tr';

type Language = 'tr';
export type MessageKey = keyof Messages;
type MessageValue = Messages[MessageKey];

const messages: { [K in Language]: Messages } = {
  tr,
};

export const locale = ref<Language>('tr');

export const translate = (key: MessageKey, n?: unknown): string => {
  const message = messages[locale.value][key];

  if (Array.isArray(message)) {
    return key;
  }

  if (!n) return message;

  return message.replace('{n}', String(n));
};

export const translateArray = (key: MessageKey): string[] => {
  const message = messages[locale.value][key];

  if (!Array.isArray(message)) return [key];

  return message;
};