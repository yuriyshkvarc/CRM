import store from '../store'
import ru from '../locales/ru.json'
import en from '../locales/en.json'

const loacles = {
  'ru-RU': ru,
  'en-US': en
}

export default function localizeFilter(key) {
  const locale = store.getters.info.locale || 'ru-RU'
  return loacles[locale][key] || `[Localize error]: key ${key} not found`
}