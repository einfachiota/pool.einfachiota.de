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
        title: 'Node hinzufügen',
        description: 'Um Ihren Knoten der Community über Tangle Bay zur Verfügung zu stellen, ist es notwendig, ihn dem Load Balancer hinzuzufügen. Es ist nicht notwendig, eine spezielle Software zu installieren oder andere Anwendungen auszuführen.',
        howto1: 'Um einen Knoten hinzuzufügen, passen Sie bitte den unten stehenden Code an und führen Sie ihn auf Ihrem Knoten aus. Eine CURL-Anforderung wird an die Load Balancer von Tangle Bay gesendet und es wird überprüft, ob die Anforderung tatsächlich von dem gewünschten Knoten kommt und Sie nicht versuchen, einen fremden Knoten hinzuzufügen.',
        code1: `curl https://api.tanglebay.org/nodes -X POST -H 'Content-type: application/json' -d '{"name": "mynode", "url": "https://1.2.3.4:14265", "address": "CP9LDJQPBNRBRWWNPI9XSUSLCTWZEBG9NMANXDWDJHMFSHSBVRIWGKVOCFWVETVBWBAKOZURNZE9NSCGDWEZXAXSFW", "pow": false}' |jq`,
        howto2: 'Bitte ändern Sie nur die folgenden Parameter:',
        attention: 'Bitte beachten Sie, dass Sie nach dem erfolgreichen Hinzufügen eines neuen Passworts das erhaltene Passwort sorgfältig aktualisieren müssen. Mit dem Passwort können Sie Ihren Knoten jederzeit wieder entfernen, wenn Sie nicht mehr interessiert sind.',
      },
      node_delete: {
        title: 'Node entfernen',
        description: 'Um einen Knoten zu entfernen, passen Sie bitte den unten stehenden Code an und führen Sie ihn auf Ihrem Knoten aus. Eine CURL-Anforderung wird an die Load Balancer von Tangle Bay gesendet und es wird überprüft, ob die Anforderung tatsächlich mit dem richtigen Passwort kommt.',
        code: 'curl -X DELETE https://api.tanglebay.org/nodes/UIBUBIUBNMDBRLZLGPXTWTEZMYEXCVHAUQJNFFTZPMAPIFBWAQXFVXQJKRTMGIAVYOKDQFFZVUBXUWUOJ',
      },
      node_update: {
        title: 'Node updaten',
        description: 'Um eine Node zu updaten, entfernen Sie bitte ihre Node aus dem Dock und sie anschließend den unteren Code an. Danach führen Sie den CURL Befehl bitte auf ihrere Node aus. Sollten sie beim wieder hinzufügen nicht das gleiche PASSWORD verwenden, verliert die Node ihre Punkte im Dock.',
        code: `curl https://api.tanglebay.org/nodes -X POST -H 'Content-type: application/json' -d '{"name": "mynode", "url": "https://1.2.3.4:14265", "address": "CP9LDJQPBNRBRWWNPI9XSUSLCTWZEBG9NMANXDWDJHMFSHSBVRIWGKVOCFWVETVBWBAKOZURNZE9NSCGDWEZXAXSFW", "pow": false, "password": "YOURNODEPASSWORD"}' |jq`
      }
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
      privacy: 'Datenschutz',
      node_register: {
        title: 'Node hinzufügen',
        description: 'Um Ihren Knoten der Community über Tangle Bay zur Verfügung zu stellen, ist es notwendig, ihn dem Load Balancer hinzuzufügen. Es ist nicht notwendig, eine spezielle Software zu installieren oder andere Anwendungen auszuführen.',
        howto1: 'Um einen Knoten hinzuzufügen, passen Sie bitte den unten stehenden Code an und führen Sie ihn auf Ihrem Knoten aus. Eine CURL-Anforderung wird an die Load Balancer von Tangle Bay gesendet und es wird überprüft, ob die Anforderung tatsächlich von dem gewünschten Knoten kommt und Sie nicht versuchen, einen fremden Knoten hinzuzufügen.',
        code1: `curl https://api.tanglebay.org/nodes -X POST -H 'Content-type: application/json' -d '{"name": "mynode", "url": "https://1.2.3.4:14265", "address": "CP9LDJQPBNRBRWWNPI9XSUSLCTWZEBG9NMANXDWDJHMFSHSBVRIWGKVOCFWVETVBWBAKOZURNZE9NSCGDWEZXAXSFW", "pow": false}' |jq`,
        howto2: 'Bitte ändern Sie nur die folgenden Parameter:',
        attention: 'Bitte beachten Sie, dass Sie nach dem erfolgreichen Hinzufügen eines neuen Passworts das erhaltene Passwort sorgfältig aktualisieren müssen. Mit dem Passwort können Sie Ihren Knoten jederzeit wieder entfernen, wenn Sie nicht mehr interessiert sind.' 
      },
      node_delete: {
        title: 'Node entfernen',
        description: 'Um einen Knoten zu entfernen, passen Sie bitte den unten stehenden Code an und führen Sie ihn auf Ihrem Knoten aus. Eine CURL-Anforderung wird an die Load Balancer von Tangle Bay gesendet und es wird überprüft, ob die Anforderung tatsächlich mit dem richtigen Passwort kommt.',
        code: 'curl -X DELETE https://api.tanglebay.org/nodes/UIBUBIUBNMDBRLZLGPXTWTEZMYEXCVHAUQJNFFTZPMAPIFBWAQXFVXQJKRTMGIAVYOKDQFFZVUBXUWUOJ',
      },
      node_update: {
        title: 'Node updaten',
        description: 'Um eine Node zu updaten, entfernen Sie bitte ihre Node aus dem Dock und sie anschließend den unteren Code an. Danach führen Sie den CURL Befehl bitte auf ihrere Node aus. Sollten sie beim wieder hinzufügen nicht das gleiche PASSWORD verwenden, verliert die Node ihre Punkte im Dock.',
        code: `curl https://api.tanglebay.org/nodes -X POST -H 'Content-type: application/json' -d '{"name": "mynode", "url": "https://1.2.3.4:14265", "address": "CP9LDJQPBNRBRWWNPI9XSUSLCTWZEBG9NMANXDWDJHMFSHSBVRIWGKVOCFWVETVBWBAKOZURNZE9NSCGDWEZXAXSFW", "pow": false, "password": "YOURNODEPASSWORD"}' |jq`
      }
    }
  }
})