<template>
  <div class="donate">
    <div class="content">
      <div class="container">
        <h1 class="heading"><i18n path="donate.title"></i18n></h1>
        <div class="divider"></div>
        <h2><i18n path="donate.subtitle"></i18n></h2>
        <p><i18n path="donate.description"></i18n></p>
        <br />
        <iota-payment class="iota-pay"><i18n path="donate.button_text"></i18n></iota-payment>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2><i18n path="donate.donationlist"></i18n></h2>
        <DonationList />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import DonationList from "../components/DonationList";

export default {
  components: { DonationList },
  data() {
    return {
      navOpen: false
    }
  }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: var(--primary);
}

.donate {
  margin-top: 50px;
}

.iota-pay {
  margin-top: 20px;
  button {
    font-family: "Open Sans" !important;
    font-weight: bold !important;
    text-transform: uppercase !important;
    letter-spacing: 0.1em !important;
    border-radius: 10px !important ;
    padding: 15px 30px !important;
    transition: all 200ms ease-in-out !important;
    border: none !important;
    background-color: var(--primary) !important;
    color: var(--white) !important;
    &:hover {
      background-color: var(--primary-darken) !important;
      cursor: pointer;
    }
  }
}
</style>
