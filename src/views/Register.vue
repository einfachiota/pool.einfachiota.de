<template>
  <div class="home">
    <div class="hero">
      <h1 class="heading">Be part of the Community Dock</h1>
      <p class="sub-heading">Register your IOTA Node</p>
    </div>

    <div class="section section-background">
      <div class="container howto">
        <h2>
          <i18n path="node_register.title"></i18n>
        </h2>
        <p class="text">
          <i18n path="node_register.description"></i18n>
        </p>
      </div>
    </div>
    <div class="section">
      <div class="container howto">
        <h2>HowTo</h2>
        <p>
          <i18n path="node_register.howto1"></i18n>
        </p>
        <pre><i18n path="node_register.code1"></i18n></pre>
        <p>
          <i18n path="node_register.howto2"></i18n>
        </p>
        <ul class="change-list">
          <li>mynode</li>
          <li>http://1.2.3.4:14265</li>
          <li>CP9LDJQPBNRBRWWNPI9XSUSLCTWZEBG9NMANXDWDJHMFSHSBVRIWGKVOCFWVETVBWBAKOZURNZE9NSCGDWEZXAXSFW</li>
          <li>true/false</li>
        </ul>
        <p>
          <i18n path="node_register.attention"></i18n>
        </p>
      </div>
    </div>
    <div class="section section-background">
      <div class="container howto">
        <h2>
          <i18n path="node_delete.title"></i18n>
        </h2>
        <p class="text">
          <i18n path="node_delete.description"></i18n>
        </p>

        <h3>HowTo</h3>

        <pre><i18n path="node_delete.code"></i18n></pre>
      </div>
    </div>
    <br>
    <br>
    <br>
    <div class="section section-background">
      <div class="container howto">
        <h2>
          <i18n path="node_update.title"></i18n>
        </h2>
        <p class="text">
          <i18n path="node_update.description"></i18n>
        </p>
        <h3>HowTo</h3>

        <pre><i18n path="node_update.code"></i18n></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  components: {},
  data() {
    return {
      data: null
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.section-background {
  p {
    max-width: 1024px;
  }
}
.change-list {
  list-style: none;
  li {
    margin: 10px 0;
  }
}
</style>