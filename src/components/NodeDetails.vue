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
          <div v-if="valid == 'true'">
            <p>
              <strong>Donationaddress:</strong>
              {{details.address}} 
              <label class="valid">valid</label>
            </p>
          </div>
          <div v-else-if="valid == 'used'">
            <p>
              <strong>Donationaddress:</strong>
              {{details.address}}
              <label class="invalid">used</label>
            </p>
          </div>
          <div v-else>
            <p>
              <strong>Donationaddress:</strong>
              {{details.address}}
              <label class="invalid">invalid</label>
            </p>
          </div>
          <el-button v-clipboard:copy="details.address" v-clipboard:success="onCopy">Copy address<span v-if="copy">   &#10004;</span></el-button>
          <br />
          <br />
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
    <h2 class="headline">Donations</h2>
    <el-card class="node-box">
      <div slot="header" class="clearfix">
      <div v-if="payoutsLoaded">
        <strong>Total received:</strong> {{totalValue}}i
        </div>
      <table class="el-table">
        <thead class="el-table__head">
          <td>Date</td>
          <td>Amount</td>
          <td>Link</td>
        </thead>
        <tbody>
          <tr v-for="(payout,id) in this.payouts" v-bind:key="id">
            <td>{{timeConverter(parseInt(payout.id))}}</td>
            <td>{{payout.value}}</td>
            <td><a v-bind:href="'https://thetangle.org/transaction/'+payout.txhash" target="_blank"> <button class="el-button">tx </button></a></td>
          </tr>
        </tbody>
      </table>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "NodeDetails",
  props: ["nodeKey"],
  data() {
    return {
      loading: false,
      url: "https://score.tanglebay.org/nodes/",
      details: {
        commands: [],
      },
      intervalid1: null,
      copy: false,
      payouts:[],
      payoutsLoaded: false,
      totalValue:0,
      valid:'true'
    };
  },
  methods: {
    fetchData() {
      return new Promise((resolve, reject) => {
        let self = this;
        fetch(this.url + this.nodeKey)
          .then(function(response) {
            return response.json();
          })
          .then(function(response) {
            console.log("what", response);
            self.details = response;
            resolve()
          })
          .catch(e=>{
            reject(e)
          })
      });
    },
    fetchPayments() {
      let self = this;
      fetch('https://pool-donations.einfachiota.de/payouts/'+self.nodeKey)
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          // let payouts = response.filter(p => typeof p.data != 'undefined')
          // self.payouts = payouts.filter(payout => payout.data.nodeId == self.nodeKey).reverse();
          self.payouts = response
          self.totalValue = response.reduce( ( sum, { value } ) => sum + value , 0)
          self.payoutsLoaded = true
        });
    },
    wereAddressesSpentFrom(address){
      if (!/[A-Z+9]{90}/.test(address) || address.length != 90) {
        console.log("invalid address");
        this.valid = 'false'
        return
      }
      let self = this
      axios({
        method: 'post',
        url: 'https://nodes.tanglebay.org',
        headers: {
          'Content-Type': 'application/json',
          'X-IOTA-API-Version': '1'
        },
        data: {
          command: "wereAddressesSpentFrom",
          addresses: [address.slice(0, 81)]
        }
      })
      .then(function (response) {
        console.log("spentAddress:", response.data.states[0]);
        if(response.data.states[0] == true){
          self.valid = 'used'
        }
      })
      .catch(function (error) {
        console.log("post error", error);
      });
    },
    onCopy() {
      this.copySuccess()
    },
    copySuccess() {
      this.copy = true
      let self = this;
      setTimeout(function() {
        self.copy = false
      }, 500)
    },
    timeConverter(UNIX_timestamp){
      let a = new Date(UNIX_timestamp);
      let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      let year = a.getFullYear();
      let month = months[a.getMonth()];
      let date = ('0' + a.getDate()).slice(-2);
      let hour = ('0' + a.getHours()).slice(-2);
      let min = ('0' + a.getMinutes()).slice(-2);
      let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min ;
      return time;
    }
  },
  async mounted() {
    console.log("details");

    this.loading = true;
    await this.fetchData();
    this.intervalid1 = setInterval(
      function() {
        this.fetchData();
      }.bind(this),
      5000
    );
    await this.fetchPayments();
    await new Promise(resolve => setTimeout(resolve, 3000));
    this.wereAddressesSpentFrom(this.details.address)
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
.node-key {
  font-size: 0.7em;
  color: var(--darker);
}

.el-table {
  border-top: 2px solid var(--primary);
  background-color: var(--light);
  margin-top: 20px;
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

.valid{
  color: white; 
  background-color: green; 
  border-radius: 3px; 
  padding: 2px;
}

.invalid{
  color: white; 
  background-color: red; 
  border-radius: 3px; 
  padding: 2px;
}

</style>