<template>
  <div>
    <p>
      <i18n path="node_delete.description"></i18n>
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
      <el-form-item label="Password" prop="password">
        <el-input
          type="text"
          v-model="ruleForm.password"
          autocomplete="off"
          placeholder="Your node password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
    <div v-else>
        <p>
        <i18n path="node_register.howto2"></i18n>
        </p>
        <pre class="code">
            {{ command }}
        </pre>
        <el-button type="primary" v-clipboard:copy="command">Copy</el-button>
        <el-button @click="edit()">Edit</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkValue = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Please input something"));
      } else {
          callback();
      }

    };
    return {
      showCode: false,
      command: "",
      ruleForm: {
        password: ""
      },
      rules: {
        password: [{ validator: checkValue, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.command = `curl -X DELETE https://register.tanglebay.org/nodes/${ this.ruleForm.password }`
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