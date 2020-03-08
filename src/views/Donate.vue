<template>
  <div class="donate">
    <div class="content">
      <div class="container">
        <h1 class="heading">Donations (BETA)</h1>
        <div class="divider"></div>
        <h2>Einer für alle, alle für einen!</h2>
        <br />
        <iota-payment class="iota-pay">Donate IOTA</iota-payment>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
a {
  text-decoration: none;
  color: var(--primary);
}

.donate {
  margin: 50px;
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
