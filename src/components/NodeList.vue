<template>
  <el-table
    v-loading="loading"
    :data="nodes"
    style="width: 100%"
    :default-sort="{prop: 'score', order: 'ascending'}"
    
    @row-click="rowClicked"
  >
    <el-table-column class="el-table__header-row" prop="" label="Rank" align="center">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
    </el-table-column>
    <el-table-column prop="name" label="Name" align="center"></el-table-column>
    <el-table-column prop="points" label="Points" align="center"></el-table-column>
    <el-table-column prop="key" label="ID" align="center"></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "NodeList",
  data() {
    return {
      loading: false,
      url: "https://score.tanglebay.org/nodes",
      nodes: [],
      intervalid1: null
    };
  },
  methods: {
    fetchData() {
      let self = this;
      fetch(this.url)
        .then(function(response) {
          return response.json();
        })
        .then(function(nodes) {
          console.log("nodes", nodes)
          if (nodes) {
            self.nodes = nodes;
            self.loading = false;
          }
        });
    },
    tableRowClassName({ row }) {
      if (row.available) {
        return "success-row";
      } else {
        return "danger-row";
      }
    },
    rowClicked(row) {
      console.log("row", row)
      this.$router.push({ name: 'details', params: { nodeKey: row.key, details: row } })
        console.log("row2")

    }
  },
  mounted() {
    this.loading = true;
    this.fetchData();
    this.intervalid1 = setInterval(
      function() {
        this.fetchData();
      }.bind(this),
      10000
    );
  },
  beforeDestroy () {
    clearInterval(this.intervalid1)
  }
};
</script>

<style>
.el-table {
  text-align: center;
}
.el-table td, .el-table th.is-leaf {

  cursor: pointer;
  background-color: rgb(225, 231, 239);
}
.el-table .el-table__row {
  cursor: pointer;
  background-color: rgb(225, 231, 239);
}

.el-tag.el-tag--danger {
  background: #d05656;
  color: rgb(225, 231, 239);
}

.el-tag.el-tag--success {
  background: #3cc13c;
  color: rgb(225, 231, 239);
}
</style>

