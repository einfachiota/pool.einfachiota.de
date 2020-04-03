<template>
<div>
  <strong><i18n path="node_details.total"></i18n>:</strong> {{unit(totalValue)}}
  <el-table
    v-loading="loading"
    :data="sortedPayments"
    style="width: 100%"
    :default-sort="{prop: 'score', order: 'ascending'}"
  >
    <el-table-column label="Date" align="left">
      <template slot-scope="scope">{{ scope.row.txInfo.timestamp | moment('DD.MM.YYYY HH:mm') }}</template>
    </el-table-column>
    <el-table-column label="IOTA" align="left">
      <template slot-scope="scope">{{unit(scope.row.txInfo.value)}}</template>
    </el-table-column>
    <el-table-column label="Message" align="left">
      <template slot-scope="scope">{{scope.row.txInfo.message}}</template>
    </el-table-column>
    <el-table-column label="Link" align="right">
      <template slot-scope="scope"><a :href="'https://thetangle.org/transaction/' + scope.row.txInfo.hash" target="_blank"><button class="el-button">tx </button></a></template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
// import * as units from '@iota/unit-converter'
let units = require('@iota/unit-converter');
export default {
  name: "NodeList",
  data() {
    return {
      loading: false,
      url: "https://pool-donations.einfachiota.de/payments",
      payments: [],
      intervalid1: null,
      totalValue: 0,
    };
  },
  methods: {
    fetchData() {
      let self = this;
      fetch(this.url)
        .then(function(response) {
          return response.json();
        })
        .then(function(payments) {

          console.log("payments", payments)
          if (payments) {
            self.payments = payments;
            self.loading = false;
          }
          let total = 0
          payments.forEach(p=>{
            if(typeof p.txInfo != 'undefined'){
              total = total + p.txInfo.value
            }
          })
          self.totalValue = total
        });
    },
    tableRowClassName({ row }) {
      if (row.available) {
        return "success-row";
      } else {
        return "danger-row";
      }
    },
    unit(param) {
      let value = param
      function round(v, r) { value = (Math.round(units.convertUnits(v, 'i', r) * 100) / 100) + " " + r }
      if (value < 1000) {
        value += ' i'
      } else if (value > 999 && value < 100000) {
        round(value, "Ki")
      } else if (value > 99999 && value < 1000000000) {
        round(value, "Mi")
      } else if (value > 999999999 && value < 1000000000000) {
        round(value, "Gi")
      } else if (value > 999999999999 && value < 1000000000000000) {
        round(value, "Ti")
      } else if (value > 999999999999999) {
        round(value, "Pi")
      }
      return value
    },
  },
  computed: {
    sortedPayments() {
      var filter = {
        payed: true
      };
       let array = this.payments.filter(function(item) {
        for (var key in filter) {
          if (item[key] === undefined || item[key] != filter[key])
            return false;
        }
        return true;
      });

      return array.reverse();
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
  background-color: var(--white);
}
.el-table .el-table__row {
  cursor: pointer;
  background-color: var(--white);
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

