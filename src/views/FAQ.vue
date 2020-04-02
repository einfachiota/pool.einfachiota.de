<template>
  <div class="faq">
    <div class="content">
      <div class="container">
        <h2 class="heading">FAQ - Frequently Asked Questions</h2>
        <div class="divider"></div>
        <h3><i18n path="faq.headline2"></i18n></h3>
        <br />
        <el-collapse accordion>
            <el-collapse-item :title="$t('faq.q1')" name="1">
                <div><i18n path="faq.a1"></i18n></div>
            </el-collapse-item>
            <el-collapse-item :title="$t('faq.q2')" name="2">
                <div><i18n path="faq.a2"></i18n></div>
            </el-collapse-item>
            <el-collapse-item :title="$t('faq.q3')" name="3">
                <div><i18n path="faq.a3"></i18n></div>
            </el-collapse-item>
            <el-collapse-item :title="$t('faq.q4')" name="4">
                <div><i18n path="faq.a4"></i18n></div>
            </el-collapse-item>
            <el-collapse-item :title="$t('faq.q5')" name="5">
                <div><i18n path="faq.a5"></i18n></div>
            </el-collapse-item>
            <el-collapse-item :title="$t('faq.q6')" name="6">
                <div><i18n path="faq.a6"></i18n></div>
            </el-collapse-item>
            <el-collapse-item :title="$t('faq.q7')" name="7">
                <div><i18n path="faq.a7"></i18n></div>
            </el-collapse-item>
            <el-collapse-item :title="$t('faq.q8')" name="8">
                <div><i18n path="faq.a8"></i18n></div>
            </el-collapse-item>
        </el-collapse>
        <br />
        <h3><i18n path="faq.no_question"></i18n></h3>
        <p>
          <strong><i18n path="faq.ask_discord"></i18n> <a href="https://discord.tanglebay.org/" target="_blank">Discord</a> <i18n path="faq.ask_discord2"></i18n></strong>
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
