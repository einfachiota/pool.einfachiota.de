<template>
  <div class="node">
    <h2 class="headline">Node Details</h2>
    <el-card class="node-box">
      <div slot="header" class="clearfix">
        <div class="left">
        <h2>{{details.name}}</h2>
          <p>
            <strong>ID:</strong>
            {{details.key}}
          </p>
          <p>
            <strong>Latest Milestone:</strong>
            {{details.milestone}}
          </p>
          <p>
            <strong>Solid Milestone:</strong>
            {{details.solidMilestone}}
          </p>
          <p>
            <strong>Version:</strong>
            {{details.appName}} {{details.appVersion}}
          </p>
          <p>
            <strong>Donationaddress:</strong>
            {{details.address}}
          </p>
        </div>
      </div>
      <table class="el-table">
        <thead class="el-table__head">
          <td>Command</td>
          <td>Count</td>
          <td>Points</td>
        </thead>
        <tbody>
          <tr class="el-table__row" v-for="(command, index) in sortedCommands" :key="index">
            <td>{{command.name}}</td>
            <td>{{command.count}}</td>
            <td>{{command.points}}</td>
          </tr>
        </tbody>
      </table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "NodeDetails",
  props: ["nodeKey"],
  data() {
    return {
      loading: false,
      url: "https://score.tanglebay.org/nodes/",
      details: {
        commands: []
      },
      intervalid1: null
    };
  },
  methods: {
    fetchData() {
      let self = this;
      fetch(this.url + this.nodeKey)
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          console.log("what", response);
          self.details = response;
        });
    }
  },
  mounted() {
    console.log("details");

    this.loading = true;
    this.fetchData();
    this.intervalid1 = setInterval(
      function() {
        this.fetchData();
      }.bind(this),
      5000
    );
  },
  beforeDestroy() {
    clearInterval(this.intervalid1);
  },
  computed: {
    sortedCommands: function() {
      function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }

      return this.details.commands.slice().sort(compare);
    }
  }
};
</script>

<style lang="scss" scoped>

p {
  word-break: break-all; 
}
.headline {
  text-align: center;
}
.node-box {
  margin: 30px auto;
  background-color: var(--light);
  max-width: 1024px;
}
.el-tag.el-tag--danger {
  background: #d05656;
  color: rgb(225, 231, 239);
}
.el-tag.el-tag--success {
  background: #3cc13c;
  color: rgb(225, 231, 239);
}

.node-key {
  font-size: 0.7em;
  color: var(--darker);
}

.el-table {
  border-top: 2px solid var(--primary);
  background-color: var(--light);
  margin-top: 120px;
  td {
    background-color: var(--light);
  }
  &__head {
    font-size: 1.3em;
    font-weight: 700;
  }
}

.left {
  float: left;
}
.right {
  float: right;
}
</style>