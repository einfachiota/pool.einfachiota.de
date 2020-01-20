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
      privacy: 'Privacy Policy',
      node_register: {
        title: 'Add node',
        description: 'To make your node available to the community via Tangle Bay, it is necessary to add it to the load balancer. It is not necessary to install any special software or run any other applications.',
        howto1: 'To add a node, please fill out the form and run it on your node. A CURL request is sent to the load balancers of Tangle Bay and it is verified that the request actually comes from the desired node and you are not trying to add a foreign node.',
        howto2: 'Please execute this in your terminal:',
        attention: 'Please note that after successfully adding a new node, you must carefully save the password which you receive. With the password you can remove your node at any time, if you are no longer interested.',
      },
      node_delete: {
        title: 'Remove node',
        description: 'To remove a node, please fill out the form and run it on your node. A CURL request is sent to the load balancers of Tangle Bay and it is verified that the request actually comes with the correct password.',
      },
      node_update: {
        title: 'Update node',
        description: 'To update a node, please fill out the form and run it on your node. If you do not use the same PASSWORD when adding a new node, the node will lose its points in the Dock.',
      }
    },
    de: {
      register: 'Registriere deine IOTA-Node und werde Teil der Community. Wir unterstützen IRI- und Hornet-Nodes.',
      register2: 'Registriere deine Node',
      nav_register: 'Registrieren',
      join: 'Join the Dock!',
      nodedock: 'Der Hafen für deine Node',
      points: 'Punkte',
      rank: 'Rang',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      node_register: {
        title: 'Node hinzufügen',
        description: 'Um deine Node der Community über das Tangle Dock zur Verfügung zu stellen, ist es notwendig, ihn dem Load Balancer hinzuzufügen. Es ist nicht notwendig, eine spezielle Software zu installieren oder andere Anwendungen auszuführen.',
        howto1: 'Um eine Node hinzuzufügen, fülle bitte das Formular aus und führe ihn auf deiner Node aus. Eine CURL-Request wird an die Load Balancer von Tangle Bay gesendet und es wird überprüft, ob die Anforderung tatsächlich von der gewünschten Node stammt und du nicht versuchst, eine fremde Node hinzuzufügen.',
        howto2: 'Bitte führe den Befehl in deiner Konsole aus: ',
        attention: 'Bitte beachte, dass nach dem erfolgreichen Hinzufügen einer neuen Node das erhaltene Passwort sorgfältig gespeichert werden muss. Mit dem Passwort kannst du jederzeit deine Node wieder entfernen.' 
      },
      node_delete: {
        title: 'Node entfernen',
        description: 'Um eine Node zu entfernen, fülle bitte das Formular aus und führe anschließend den Befehl auf deiner Node aus. Ein CURL-Request wird an die Load Balancer von Tangle Bay gesendet und es wird überprüft, ob die Anforderung tatsächlich mit dem richtigen Passwort kommt.'
      },
      node_update: {
        title: 'Node updaten',
        description: 'Um eine Node zu updaten, fülle bitte das Formular aus und führe anschließend den Befehl auf deiner Node aus. Sollte beim wieder hinzufügen nicht das gleiche PASSWORD verwendet werden, verliert die Node ihre Punkte im Dock.'
      }
    }
  }
})