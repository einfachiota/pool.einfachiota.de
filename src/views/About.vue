<template>
  <div class="about">
    <div class="content">
      <div class="container">
        <h1 class="heading">Was ist der Pool?</h1>
        <div class="divider"></div>
        <h2>Einer für alle, alle für einen!</h2>
        <p>
          <strong>Ein Pool sind viele IOTA Nodes (iri), die sich an einem Aufgabenverteiler (piri) angemeldet haben.</strong>
        </p>
        <p>Piri ist ein Proxy und Load Balancer für mehrere IOTA-Nodes. Einerseits um die Last auf die Nodes zu verteilen, andererseits um die Nodes abzusichern und um zusätzliche Features nutzen zu können, wie beispielsweise Health Checks, Circuit Breaker, Rate Limiting und Metriken.</p>
        <p>
          Mehr Informationen könnt ihr in
          <a
            href="https://www.einfachiota.de/#/post/projekt-der-woche-piri"
          >diesem Projekt der Woche</a> nachlesen.
        </p>
        <p>
          Oder ihr schaut direkt in
          <a href="https://gitlab.com/georg.mittendorfer/piri?nav_source=navbar">die Quelle</a> rein - dort gibts es auch ein
          <a href="https://gitlab.com/georg.mittendorfer/piri/wikis/home">Tolles Wiki!</a>!
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

.about {
  margin: 50px;
}
</style>
