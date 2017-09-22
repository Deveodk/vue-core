import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const defaultLocale = process.env.DEFAULT_LOCALE

let languages = {}

const files = require.context('@/app', true, /lang.json/)

files.keys().forEach((key) => {
  const re = /.*(..+)(.lang.json)$/
  const language = re.exec(key)[1]

  const folder = /.+?(?=lang)/
  const parseFolderName = /[A-Za-z]+/
  const folderName = parseFolderName.exec(folder.exec(key))[0]

  if (!languages[language]) {
    languages[language] = {}
  }
  languages[language][folderName] = files(key)
})

export default new VueI18n({
  locale: defaultLocale,
  fallbackLocale: 'da',
  messages: languages
})
