<template>
  <div class="home">
     <vue-particles
        class="particles"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#000000"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    <div class="hero">
     
      <h1 class="heading">IOTA Node Pool</h1>
      <p class="sub-heading"><i18n path="nodedock"></i18n></p>
     
    </div>
    <div class="section">
      <div class="container">
        <h2>Nodes Leaderboard</h2>
        <NodeList />
      </div>
    </div>
    <div class="section section-background">
      <div class="container">
        <h2><i18n path="join"></i18n></h2>
        <p><i18n path="register"></i18n></p>
        <router-link to="/register" class="nav-item" exact-active-class="active">
          <i18n path="register2"></i18n>
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

.particles {
  display: block;
  max-height: 10vh;
}
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
    color: var(--black);
    background-color: var(--light);
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

.el-table th.is-leaf {
  border-bottom: 1px solid var(--primary);
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