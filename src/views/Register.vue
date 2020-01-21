<template>
  <div class="home">
    <div class="section section-background">
      <div class="container howto">
        <h1 class="heading">Be part of the Community Dock</h1>
        <p class="sub-heading">Register your IOTA Node</p>
        <p class="text">
          <i18n path="node_register.description"></i18n>
        </p>
      </div>
    </div>
    <div class="section">
      <div class="container howto">
        <h2>
          <i18n path="node_register.title"></i18n>
        </h2>
        <h3>HowToRegister</h3>

        <AddNodeForm />
      </div>
    </div>
    <div class="section section-background">
      <div class="container howto">
        <h2>
          <i18n path="node_delete.title"></i18n>
        </h2>
        <h3>HowToDelete</h3>
        <RemoveNodeForm />
      </div>
    </div>
    <br />
    <br />
    <br />
    <div class="section">
      <div class="container howto">
        <h2>
          <i18n path="node_update.title"></i18n>
        </h2>
        <h3>HowToUpdate</h3>
        <UpdateNodeForm />
      </div>
    </div>
  </div>
</template>

<script>
import AddNodeForm from "../components/AddNodeForm";
import RemoveNodeForm from "../components/RemoveNodeForm";
import UpdateNodeForm from "../components/UpdateNodeForm";

export default {
  name: "Register",
  components: { AddNodeForm, RemoveNodeForm, UpdateNodeForm },
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