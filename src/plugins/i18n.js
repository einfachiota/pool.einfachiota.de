import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'de',
  messages: {
    en:{
      home: {
        headline1: 'IOTA Node Pool',
        headline2: 'IOTA Nodes from the community - for the community!',
        table_head: 'Pool Leaderboard',
        table_rank: 'Rank',
        table_points: 'Points',
        table_name: 'Name',
        table_version: 'Version',
        pool_join: 'Join the Pool!',
        pool_register_desc: 'Register your IOTA node and be part of the Community. We support IRI and Hornet nodes.',
        pool_register_link: 'Register your node',
        pool_faq_head: 'What is the pool?',
        pool_faq_desc: 'Learn more about the pool',
      },
      nav_register: 'Register',
      rank: 'Rank',
      imprint: 'Legal Notice',
      privacy: 'Privacy Policy',
      register_title: 'Be part of the Community Pool',
      register_desc: 'To make your node available to the community via Tangle Bay, it is necessary to add it to the load balancer. It is not necessary to install any special software or run any other applications.',
      register_run: 'Please execute this in your terminal (Package jq required!):',
      register_empty: 'Please fill out this field.',
      node_add: {
        title: 'Add node',
        description: 'To add a node, please fill out the form and run it on your node. A CURL request is sent to the load balancers of Tangle Bay and it is verified that the request actually comes from the desired node and you are not trying to add a foreign node.',
        pow: 'If your node support POW.',
        submit: 'Submit',
        edit: 'Edit',
        reset: 'Reset',
        copy: 'Copy',
        attention: 'Please note that after successfully adding a new node, you must carefully save the password which you receive. With the password you can remove your node at any time, if you are no longer interested.'
      },
      node_delete: {
        title: 'Remove node',
        description: 'To remove a node, please fill out the form and run it on your node. A CURL request is sent to the load balancers of Tangle Bay and it is verified that the request actually comes with the correct password.',
        submit: 'Submit',
        edit: 'Edit',
        reset: 'Reset',
        copy: 'Copy'
      },
      node_update: {
        title: 'Update node',
        description: 'To update a node, please fill out the form and run it on your node. If you do not use the same PASSWORD when adding a new node, the node will lose its points in the pool.',
        description2: 'A node should only be updated in an emergency, as it can lead to a total loss of the current points!',
        pow: 'If your node support POW.',
        submit: 'Submit',
        edit: 'Edit',
        reset: 'Reset',
        copy: 'Copy'
      },
      node_details: {
        valid: 'Valid',
        invalid: 'Invalid',
        address: 'Donationaddress',
        copy: 'Copy address',
        command: 'Command',
        count: 'Count',
        points: 'Points',
        donations: 'Donations',
        total: 'Total received',
        date: 'Date',
        amount: 'Amount',
        link: 'Link'
      },
      footer: require('./translations/footer').en(),
      donate: {
        title: 'Donations (BETA)',
        subtitle: 'Made by the community to support the communty',
        description: 'To Donate some MIOTAs, please press the button below! An address can only be used once for a donation!',
        button_text: 'Donate IOTA',
        donationlist: 'Donations overview',
        info_header: 'Important Information',
        info: 'The beta phase was successfully completed. A total of 2.07Gi were distributed to 67 node owners depending on their performance. The live event is now being prepared - do you want to help us? Just get in touch with us!'
      },
      faq: {
        h2: 'All questions at once',
        q1: 'What is the pool?',
        a1: 'The pool offers node operators the opportunity to participate in a public access point for Trinity without having to make their own address public. The pool also offers the possibility to receive donations from users.',
        q2: 'How can I donate?',
        a2: 'To make a donation to the nodes, simply go to "Donate" in the main menu and then press the appropriate Donate button. After that a QR Code will be generated or the receiving address for copying or directly as deeplink for Trinity. In Trinity itself you only have to select the desired number of IOTA and you can optionally add a message which will be displayed on the overview page. If everyone would donate just as an example one Euro per month to the nodes, many node operators could be supported and therefore the whole IOTA network.',
        q3: 'What happens to my donation?',
        a3: 'After your donation has been confirmed at the receiving address, it will be distributed to the different nodes. The amount of each donation is based on a percentage of the Nodes score to the total score of all Nodes. The distribution will take place immediately after the confirmation.',
        q4: 'What can I do if I have forgotten my node password?',
        a4: 'If you have forgotten your node password, it is unfortunately not possible to change/delete the node. In this case you have to wait for the reset of the season, so that a new addition is possible again.',
        q5: 'Which node versions are supported?',
        a5: 'The pool only supports the latest Hornet and IRI releases.',
        q6: 'Can I tax-deduct the donation?',
        a6: 'A tax deduction of the donation is not possible, because einfachIOTA does not receive any donation itself, but only acts as an agent without commission or other remuneration. The donations are always directly addressed to the respective node operators and we have no direct influence on them.',
        q7: 'What can I do if my donation was not paid out?',
        a7: 'We assume no liability for lost IOTA. However, we do our best to operate the service smoothly and are anxious to ensure a smooth process. If errors are detected, please report the error.',
        q8: 'What happens if a donation address is invalid?',
        a8: 'If a donation address is invalid, the IOTA intended for the node are sent to einfachIOTA as a donation. However, these IOTA will be returned to the ecosystem later.',
        no_question: 'Your question is not there?',
        ask_discord: 'No prob! Join our',
        ask_discord2: 'in the community #pool channel.'
      }
    },
    de: {
      home: {
        headline1: 'IOTA Node Pool',
        headline2: 'IOTA Nodes von der Community - für die Community!',
        table_head: 'Pool Rangliste',
        table_rank: 'Rang',
        table_points: 'Punkte',
        table_name: 'Name',
        table_version: 'Version',
        pool_join: 'Mach mit!',
        pool_register_desc: 'Registriere deine IOTA-Node und werde Teil der Community. Wir unterstützen IRI- und Hornet-Nodes.',
        pool_register_link: 'Registriere deine Node',
        pool_faq_head: 'Was ist der Pool?',
        pool_faq_desc: 'Erfahre mehr über den Pool',
      },
      nav_register: 'Registrieren',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      register_title: 'Sei ein Teil des Community Pools',
      register_desc: 'Um deine Node der Community über den Pool zur Verfügung zu stellen, ist es notwendig, ihn den Load Balancern hinzuzufügen. Es ist nicht notwendig, eine spezielle Software zu installieren oder andere Anwendungen auszuführen.',
      register_run: 'Bitte führe den Befehl in deiner Konsole aus (Paket jq benötigt!): ',
      register_empty: 'Bitte fülle das Feld aus.',
      node_add: {
        title: 'Node hinzufügen',
        description: 'Um eine Node hinzuzufügen, fülle bitte das Formular aus und führe ihn auf deiner Node aus. Eine CURL-Request wird an die Load Balancer von Tangle Bay gesendet und es wird überprüft, ob die Anforderung tatsächlich von der gewünschten Node stammt und du nicht versuchst, eine fremde Node hinzuzufügen.',
        pow: 'Falls deine Node POW unterstützt.',
        submit: 'Senden',
        edit: 'Ändern',
        reset: 'Zurücksetzen',
        copy: 'Kopieren',
        attention: 'Bitte beachte, dass nach dem erfolgreichen Hinzufügen einer neuen Node das erhaltene Passwort sorgfältig gespeichert werden muss. Mit dem Passwort kannst du jederzeit deine Node wieder entfernen.' 
      },
      node_delete: {
        title: 'Node entfernen',
        description: 'Um eine Node zu entfernen, fülle bitte das Formular aus und führe anschließend den Befehl auf deiner Node aus. Ein CURL-Request wird an die Load Balancer von Tangle Bay gesendet und es wird überprüft, ob die Anforderung tatsächlich mit dem richtigen Passwort kommt.',
        submit: 'Senden',
        edit: 'Ändern',
        reset: 'Zurücksetzen',
        copy: 'Kopieren'
      },
      node_update: {
        title: 'Node updaten',
        description: 'Um eine Node zu updaten, fülle bitte das Formular aus und führe anschließend den Befehl auf deiner Node aus. Sollte beim wieder hinzufügen nicht das gleiche PASSWORD verwendet werden, verliert die Node ihre Punkte im Pool.',
        description2: 'Eine Node sollte nur bei einem Notfall aktualisiert werden, da es zum Totalverlust der aktuellen Punkte führen kann!',
        pow: 'Falls deine Node POW unterstützt.',
        submit: 'Senden',
        edit: 'Ändern',
        reset: 'Zurücksetzen',
        copy: 'Kopieren'
      },
      node_details: {
        valid: 'Gültig',
        invalid: 'Ungültig',
        address: 'Spendenadresse',
        copy: 'Adresse kopieren',
        command: 'Befehl',
        count: 'Anzahl',
        points: 'Punkte',
        donations: 'Spenden',
        total: 'Insgesamt erhalten',
        date: 'Datum',
        amount: 'Anzahl',
        link: 'Link'
      },
      footer: require('./translations/footer').de(),
      donate: {
        title: 'Spenden',
        subtitle: 'Einer für alle, alle für einen!',
        description: 'Wenn du ein paar MIOTA an die Nodebetreiber spenden willst, drücke bitte den Button! Eine Adresse kann nur einmal für eine Spende verwendet werden!',
        button_text: 'Spende IOTA',
        donationlist: 'Spendenübersicht',
        info_header: 'Wichtige information',
        info: 'Die Betaphase wurde erfolgreich beendet. Insgesamt wurden 2,07Gi an 67 Node Besitzer je nach Leistung verteilt. Der Livegang wird nun vorbereitet - Du willst uns dabei helfen? Melde dich einfach bei uns!'
      },
      faq: {
        headline2: 'Alle Fragen auf einen Blick',
        q1: 'Was ist der Pool?',
        a1: 'Der Pool bietet den Nodebetreiben die Möglichkeit an einem öffentlichen Zugangspunkt für Trinity teilzunehmen, ohne dass selbst die eigene Adresse öffentlich gemacht werden muss. Dabei bietet der Pool eine Möglichkeit eine Donation von Nutzern zu erhalten.',
        q2: 'Wie kann ich spenden?',
        a2: 'Um eine Spende an die Nodes zu machen, gehst du einfach im Hauptmenü auf „Donate“ und drückst anschließend den entsprechenden Donate-Button. Danach wird ein QR-Code generiert bzw. die Empfangsadresse zum kopieren oder direkt als Deeplink für Trinity. In Trinity selbst wählst du nur noch die gewünschte Anzahl der IOTA und du kannst Optional eine Nachricht mitgeben, welche auf der Übersichtsseite angezeigt wird. Wenn jeder nur als Beispiel einen Euro im Monat spenden würde an die Nodes, könnten viele Nodebetreiber unterstützt werden und somit das gesamte IOTA Netzwerk.',
        q3: 'Was passiert mit meiner Spende?',
        a3: 'Nachdem deine Spende an der Empfangsaddresse bestätigt worden ist, wird diese auf die verschiedenen Nodes verteilt. Die Höhe der jeweiligen Spende richtet sich prozentual an der Punktzahl der Node zu der Gesamtpunktzahl aller Nodes. Die Aufteilung geschieht sofort nach der Bestätigung.',
        q4: 'Was kann ich tun, wenn ich mein Node-Passwort vergessen habe?',
        a4: 'Solltest du dein Node-Passwort vergessen haben, ist eine Änderung/Löschung der Node leider nicht möglich. In diesem Fall muss auf den Reset der Season gewartet werden, sodass ein erneutes Hinzufügen wieder möglich ist.',
        q5: 'Welche Node-Versionen werden unterstützt?',
        a5: 'Der Pool unterstützt nur die aktuellen und offiziellen Veröffentlichungen von Hornet und IRI.',
        q6: 'Kann ich die Spende steuerlich absetzen?',
        a6: 'Eine steuerliche Absetzung der Spende ist nicht möglich, da einfachIOTA keine Spende selbst erhält, sondern nur Vermittler ohne Provision oder andere Vergütung agiert. Die Spenden richten sich immer direkt an die jeweiligen Nodebetreiber und wir haben keinen direkten Einfluss auf diese.',
        q7: 'Was kann ich tun, wenn meine Spende nicht ausgezahlt wurde?',
        a7: 'Wir übernehmen keine Haftung für verloren gegangene IOTA. Wir bemühen uns aber den Service reibunglos zu betreiben und sind bestrebt einen reibungslosen Ablauf zu gewährleisten. Sollten Fehler erkannt werden, so bitten wir um eine entsprechende Meldung des Fehlers.',
        q8: 'Was passiert wenn eine Donationadresse ungültig ist?',
        a8: 'Sollte eine Donationadresse ungültig sein, so werden die für die Node bestimmten IOTA an einfachIOTA gespendet. Diese IOTA werden dann nachträglich wieder dem Ökosystem zugeführt.',
        no_question: 'Deine Frage ist nicht dabei?',
        ask_discord: 'Kein Problem! Melde dich in unserem',
        ask_discord2: 'im Community #pool Channel.'
      }
    }
  }
})

console.log("footer", require('./translations/footer'))