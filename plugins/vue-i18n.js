import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale'
import uz from '~/languages/uz.json'
import ru from '~/languages/ru.json'

Vue.use(VueI18n)

export default ({ app }) => {
  // Define your translations
  const messages = {
    uz,
    ru,
  }

  const savedLanguage = localStorage.getItem('language') || 'uz'

  // Initialize vue-i18n
  const i18n = new VueI18n({
    locale: savedLanguage, // Default locale
    fallbackLocale: 'uz', // Fallback locale
    messages, // Localization messages
  })

  locale.i18n((key, value) => i18n.t(key, value))

  app.i18n = i18n
  Vue.use(ElementUI)
}
