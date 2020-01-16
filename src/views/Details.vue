<template>
  <div class="detail">
    <h3>Node Details</h3>
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

.detail {
  margin-top: 50px;
}
</style>
