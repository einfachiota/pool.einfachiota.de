<template>
  <div>
    <p>
      <i18n path="node_update.description"></i18n>
    </p>
    <br />
    <el-form
    v-if="!showCode"
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="Name" prop="name">
        <el-input
          type="text"
          v-model="ruleForm.name"
          autocomplete="off"
          placeholder="IOTA Hornet Node"
        ></el-input>
      </el-form-item>
      <el-form-item label="URL" prop="url">
        <el-input type="text" v-model="ruleForm.url" autocomplete="off" placeholder="https://my.url.com:443"></el-input>
      </el-form-item>
      <el-form-item label="Address" prop="address">
        <el-input
          type="text"
          v-model="ruleForm.address"
          autocomplete="off"
          placeholder="CP9LDJQPBNRBRWWNPI9XSUSLCTWZEBG9NMANXDWDJHMFSHSBVRIWGKVOCFWVETVBWBAKOZURNZE9NSCGDWEZXAXSFW"
        ></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          type="text"
          v-model="ruleForm.password"
          autocomplete="off"
          placeholder="MXASHSEGANHOZSIODDGOYVLHL9MLUXQXNWRAFDHLNMJVOROXJZPBQQJLWSAQNVPRW9ORGGENCWDTBUGWD"
        ></el-input>
      </el-form-item>
      <el-form-item label="POW" prop="pow">
        <el-checkbox v-model="ruleForm.pow"><i18n path="node_update.pow"></i18n></el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"><i18n path="node_update.submit"></i18n></el-button>
        <el-button @click="resetForm('ruleForm')"><i18n path="node_update.reset"></i18n></el-button>
      </el-form-item>
    </el-form>
    <div v-else>
        <p>
        <i18n path="register_run"></i18n>
        </p>
        <pre class="code">
            {{ command }}
        </pre>
        <el-button type="primary" v-clipboard:copy="command"><i18n path="node_update.copy"></i18n></el-button>
        <el-button @click="edit()"><i18n path="node_update.edit"></i18n></el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkValue = (rule, value, callback) => {
      if (!value) {
        return callback(new Error(<i18n path="register_empty"></i18n>));
      } else {
          callback();
      }

    };
    return {
      showCode: false,
      command: "asd",
      ruleForm: {
        name: "",
        url: "",
        address: "",
        password: "",
        pow: false
      },
      rules: {
        name: [{ validator: checkValue, trigger: "blur" }],
        url: [{ validator: checkValue, trigger: "blur" }],
        address: [{ validator: checkValue, trigger: "blur" }],
        password: [{ validator: checkValue, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.command = `curl --silent --output /dev/null -X DELETE https://register.tanglebay.org/${ this.ruleForm.password } && curl https://register.tanglebay.org -X POST -H 'Content-type: application/json' -d '{"name": "${ this.ruleForm.name }", "url": "${ this.ruleForm.url }", "address": "${ this.ruleForm.address }", "pow": ${ this.ruleForm.pow }, "password": "${ this.ruleForm.password }" }' |jq`
          this.showCode = true;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    edit() {
      this.showCode = false;
    },
    resetForm() {
        this.ruleForm = {}
    }
  }
};
</script>

<style lang="scss" scoped>
.code {
  white-space: pre-wrap; /* Since CSS 2.1 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  background-color: var(--dark);
  color: var(--white);
  padding: 15px 5px;
}
</style>