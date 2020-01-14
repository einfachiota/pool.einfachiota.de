<template>
  <div>
    <el-tag v-if="online" type="success">Online</el-tag>
    <el-tag v-if="!online" type="danger">Offline</el-tag>
  </div>
</template>

<script>
export default {
  name: "StatusBar",
  data() {
    return {
      loading: false,
      online: false,
      url: "https://nodes.tanglebay.org/actuator/health/"
    };
  },
  methods: {
    fetchData() {
      let self = this;
      fetch(this.url)
        .then(function(response) {
          return response.json();
        })
        .then(function(status) {
          if (status) {
            self.online = true
          } else {
            self.online = false
          }
        });
    }
  },
  created() {
    this.loading = true;
    this.fetchData();
    this.intervalid1 = setInterval(
      function() {
        this.fetchData();
      }.bind(this),
      5000
    );
  }
};
</script>