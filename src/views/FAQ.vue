<template>
  <div class="faq">
    <div class="content">
      <div class="container">
        <h1 class="heading">FAQ - Frequently Asked Questions</h1>
        <div class="divider"></div>
        <h2>Alle Fragen auf einen Blick</h2>

        <el-collapse accordion>
            <el-collapse-item title="Was ist der Pool?" name="1">
                <div>Der Pool bietet den Nodebetreiben die Möglichkeit an einem öffentlichen Zugangspunkt für Trinity teilzunehmen, ohne dass selbst die eigene Adresse öffentlich gemacht werden muss. Dabei bietet der Pool eine Möglichkeit eine Donation von Nutzern zu erhalten.</div>
            </el-collapse-item>
            <el-collapse-item title="Wie kann ich spenden?" name="2">
                <div>Um eine Spende an die Nodes zu machen, gehst du einfach im Hauptmenü auf „Donate“ und drückst anschließend den entsprechenden Donate-Button. Danach wird ein QR-Code generiert bzw. die Empfangsadresse zum kopieren oder direkt als Deeplink für Trinity. In Trinity selbst wählst du nur noch die gewünschte Anzahl der IOTA und du kannst Optional eine Nachricht mitgeben, welche auf der Übersichtsseite angezeigt wird. Wenn jeder nur als Beispiel einen Euro im Monat spenden würde an die Nodes, könnten viele Nodebetreiber unterstützt werden und somit das gesamte IOTA Netzwerk</div>
            </el-collapse-item>
            <el-collapse-item title="Was passiert mit meiner Spende?" name="3">
                <div>Nachdem deine Spende an der Empfangsaddresse bestätigt worden ist, wird diese auf die verschiedenen Nodes verteilt. Die Höhe der jeweiligen Spende richtet sich prozentual an der Punktzahl der Node zu der Gesamtpunktzahl aller Nodes. Die Aufteilung geschieht sofort nach der Bestätigung.</div>
            </el-collapse-item>
            <el-collapse-item title="Was kann ich tun, wenn ich mein Node-Passwort vergessen habe?" name="4">
                <div>Solltest du dein Node-Passwort vergessen haben, ist eine Änderung/Löschung der Node leider nicht möglich. In diesem Fall muss auf den Reset der Season gewartet werden, sodass ein erneutes Hinzufügen wieder möglich ist.</div>
            </el-collapse-item>
            <el-collapse-item title="Welche Node-Versionen werden unterstützt?" name="4">
                <div>Der Pool unterstützt nur die aktuellen und offiziellen Veröffentlichungen von Hornet und IRI.</div>
            </el-collapse-item>
            <el-collapse-item title="Kann ich die Spende steuerlich absetzen?" name="4">
                <div>Eine steuerliche Absetzung der Spende ist nicht möglich, da einfachIOTA keine Spende selbst erhält, sondern nur Vermittler ohne Provision oder andere Vergütung agiert. Die Spenden richten sich immer direkt an die jeweiligen Nodebetreiber und wir haben keinen direkten Einfluss auf diese.</div>
            </el-collapse-item>
            <el-collapse-item title="Meine Spende wurde nicht ausgezahlt?" name="4">
                <div>Wir übernehmen keine Haftung für verlorengegangene IOTA. Wir bemühen uns aber den Service reibunglos zu betreiben und sind bestrebt einen reibungslosen Ablauf zu gewährleisten. Sollten Fehler erkannt werden, so bitten wir um eine entsprechende Meldung des Fehlers.</div>
            </el-collapse-item>
        </el-collapse>
        <h2>Deine Frage ist nicht dabei?</h2>
        <p>
          <strong>Kein problem! Melde dich in unserem <a href="https://discord.tanglebay.org/" target="_blank">Discord im Community #pool Channel</a>.</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: var(--primary);
}

.faq {
  margin: 50px;
}
</style>
