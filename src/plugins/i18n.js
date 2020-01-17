import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'de',
  messages: {
    en:{
      register: 'Register your IOTA node and be part of the Community. We support IRI and Hornet nodes.',
      register2: 'Register your node',
      nav_register: 'Register',
      join: 'Join the Dock!',
      nodedock: 'The dock for your node',
      points: 'Points',
      rank: 'Rank',
      imprint: 'Legal Notice',
      privacy: 'Privacy Policy'
    },
    de: {
      register: 'Registrieren Sie Ihren IOTA-Node und werden Sie Teil der Community. Wir unterstützen IRI- und Hornet-Nodes.',
      register2: 'Registriere deinen Node',
      nav_register: 'Registrieren',
      join: 'Join the Dock!',
      nodedock: 'Der Hafen für deine Node',
      points: 'Punkte',
      rank: 'Rang',
      imprint: 'Impressum',
      privacy: 'Datenschutz'
    }
  }
})