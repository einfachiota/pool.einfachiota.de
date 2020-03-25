<template>
  <div class="faq">
    <div class="content">
      <div class="container">
        <h1 class="heading">FAQ - Frequently Asked Questions</h1>
        <div class="divider"></div>
        <h2><i18n path="faq.h2"></i18n></h2>

        <el-collapse accordion>
            <el-collapse-item title=<i18n path="faq.q1"></i18n> name="1">
                <div><i18n path="faq.a1"></i18n></div>
            </el-collapse-item>
            <el-collapse-item title=<i18n path="faq.q2"></i18n> name="2">
                <div><i18n path="faq.a2"></i18n></div>
            </el-collapse-item>
            <el-collapse-item title=<i18n path="faq.q3"></i18n> name="3">
                <div><i18n path="faq.a3"></i18n></div>
            </el-collapse-item>
            <el-collapse-item title=<i18n path="faq.q4"></i18n> name="4">
                <div><i18n path="faq.a4"></i18n></div>
            </el-collapse-item>
            <el-collapse-item title=<i18n path="faq.q5"></i18n> name="5">
                <div><i18n path="faq.a5"></i18n></div>
            </el-collapse-item>
            <el-collapse-item title=<i18n path="faq.q6"></i18n> name="6">
                <div><i18n path="faq.a6"></i18n></div>
            </el-collapse-item>
            <el-collapse-item title=<i18n path="faq.q7"></i18n> name="7">
                <div><i18n path="faq.a7"></i18n></div>
            </el-collapse-item>
        </el-collapse>
        <h2><i18n path="faq.no_question"></i18n></h2>
        <p>
          <strong><i18n path="faq.ask_discord"></i18n></strong>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: var(--primary);
}

.faq {
  margin: 50px;
}
</style>
