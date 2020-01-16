<template>
  <div class="home">
    <div class="hero">
      <h1 class="heading">Tangle Bay Dock</h1>
      <p class="sub-heading">The dock for the community</p>
    </div>

    <div class="section section-background">
      <div class="container">
        <h2>Dock in!</h2>
        <p>You can specify the dock in your Trinity Wallet as IOTA Node and get access to all nodes in the dock!</p>
        <el-alert
          title="URL erfolgreich kopiert!"
          type="success"
          center
          v-if="copied"
          class="el-zoom-in-top"
        ></el-alert>
        <h3 v-clipboard:copy="url" v-clipboard:success="onCopy" v-clipboard:error="onError">{{url}}</h3>
        <br />
        <button
          type="button"
          class="el-button el-button--primary"
          v-clipboard:copy="url"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >URL Kopieren</button>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <h2>Node Liste</h2>
        <NodeList />
      </div>
    </div>
    <div class="section section-background">
      <div class="container">
        <h2>Join the Dock!</h2>
        <p>Register your IOTA node and be part of the Community Dock. We support IRI and Hornet nodes.</p>
        <router-link to="/manage" class="nav-item" exact-active-class="active">
          Register your node
        </router-link>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import NodeList from "../components/NodeList";

export default {
  name: "Home",
  components: { NodeList },
  data() {
    return {
      copied: false,
      url: "https://nodes.tanglebay.org"
    };
  },
  methods: {
    onCopy() {
      this.copied = true;
      console.log("copy success!");
      setTimeout(
        function() {
          console.log("what?");
          this.copied = false;
        }.bind(this),
        1000
      );
    },
    onError() {
      console.log("copy error!");
    }
  }
};
</script>

<style lang="scss">
.el-main {
  padding: 0px !important;
}
.home {
  text-align: center;
}
.hero {
  margin: 0 10px;
}
.section {
  padding: 80px 0;
  &-background {
    color: var(--white);
    background-color: var(--dark);
    p {
      max-width: 600px;
      margin: 15px auto 30px;
    }
    a {
      text-decoration: none;
    }
  }

  .headline-wrapper {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
@media only screen and (max-width: 740px) {
  .hero {
    padding-top: 40px;
  }
  .headline-wrapper {
    flex-wrap: wrap;
    h2 {
      margin-bottom: 20px;
    }
  }
  .btn-social {
    margin-bottom: 5px !important;
  }
}
</style>