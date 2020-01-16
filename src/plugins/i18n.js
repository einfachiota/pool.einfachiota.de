import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'de',
  messages: {
    en:{
      register: 'Register your IOTA node and be part of the Community Dock. We support IRI and Hornet nodes.',
      register2: 'Register your node',
      join: 'Join the Dock!',
      nodedock: 'The node dock for the community',
      score: 'Score',
      rank: 'Rank',
      imprint: 'Imprint',
      privacy: 'Privacy policy'
    },
    de: {
      register: 'Registrieren Sie Ihren IOTA-Node und werden Sie Teil des Community Docks. Wir unterstützen IRI- und Hornet-Nodes.',
      register2: 'Registriere deinen Node',
      join: 'Join the Dock!',
      nodedock: 'Der Nodehafen für die Community',
      score: 'Punktzahl',
      rank: 'Rang',
      imprint: 'Impressum',
      privacy: 'Datenschutz'
    }
  }
})