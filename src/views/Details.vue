<template>
  <div class="details">
    <NodeDetails :nodeKey="$route.params.nodeKey"/>
  </div>
</template>

<script>
import NodeDetails from '../components/NodeDetails'

export default {
  name: "Details",
  components: { NodeDetails },
  data() {
    return {
      url: "https://nodes.tanglebay.org",
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: var(--primary);
}

.details {
  margin-top: 50px;
  padding: 20px 50px;
}
</style>
