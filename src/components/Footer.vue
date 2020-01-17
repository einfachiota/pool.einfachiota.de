<template>
  <div class="footer">
    <div class="row footer-bottom">
      <div class="footer-bottom-col">Made with &#10084; by <a target="_blank" class="footer-main-link" href="https://www.einfachIOTA.de">einfachIOTA</a> & <a target="_blank" class="footer-main-link" href="https://tanglebay.org">Tangle Bay</a></div>
      <div class="footer-bottom-col">
        <a class="footer-main-link" href="https://tanglebay.org/legal-notice/"><i18n path="imprint"></i18n></a>
        <a class="footer-main-link" href="https://tanglebay.org/privacy-policy/"><i18n path="privacy"></i18n></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  background-color: var(--dark);
  width: 100%;
  padding: 15px 50px 0;
  box-sizing: border-box;
  text-align: center;
  border-top: 5px solid var(--primary);
  color: var(--primary);
  .heart {
    color: red;
  }
  .row {
    display: flex;
    justify-content: space-between;
  }
  .footer-main {
    text-align: left;
    width: 25%;
    margin-right: 50px;
    margin-bottom: 50px;
    &:last-child {
      margin-right: 0;
    }
    .logo {
      height: 100px;
    }
    h4 {
      font-size: 20px;
      line-height: 1;
      margin-bottom: 15px;
    }
    .divider {
      width: 50px;
      margin: 15px 0;
    }
    .footer-main-link {
      display: block;
      color: var(--dark);
      margin: 0;
      line-height: 2;
      font-size: 16px;
      text-decoration: none;
      transition: color 200ms ease-in-out;
      &:hover {
        color: var(--primary);
      }
    }
    .footer-main-link-2 {
      color: var(--dark);
      margin: 0;
      line-height: 2;
      font-size: 16px;
      text-decoration: none;
      transition: color 200ms ease-in-out;
      &:hover {
        color: var(--primary);
      }
    }
  }
  .footer-bottom {
    padding: 15px 20px;
    margin: 0 -50px;
    color: var(--primary);
    .footer-bottom-col {
      width: 33%;
      &__left {
        text-align: left;
      }
      &__right {
        text-align: right;
      }
      .footer-main-link {
        margin: 0 10px;
        color: var(--primary);
        &:visited {
          color: var(--primary);

        }
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .footer-main-link {
     color: var(--primary);
      text-decoration: none;
      transition: color 200ms ease-in-out;
      &:hover {
        color: var(--primary);
      }
    }
    .footer-main-link-2 {
     color: var(--primary);
      text-decoration: none;
      transition: color 200ms ease-in-out;
      &:hover {
        color: var(--primary);
      }
    }
  }
}
@media only screen and (max-width: 992px) {
  .footer {
    .row {
      flex-wrap: wrap;
      .footer-main {
        width: calc(50% - 50px);
        &:nth-child(even) {
          margin-right: 0;
        }
      }
    }
    .row.footer-bottom {
      .footer-bottom-col {
        width: 50%;
        &:first-child {
          text-align: left;
        }
        &:nth-child(2) {
          text-align: right;
        }
        &:nth-child(3) {
          width: 100%;
          text-align: left;
          margin-top: 10px;
        }
      }
    }
  }
}
@media only screen and (max-width: 624px) {
  .footer {
    .row {
      flex-wrap: wrap;
      .footer-main {
        width: 100%;
        margin-right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
    .row.footer-bottom {
      .footer-bottom-col {
        width: 100%;
        &:first-child {
          text-align: center;
        }
        &:nth-child(2) {
          text-align: center;
          margin-top: 10px;
        }
        &:nth-child(3) {
          text-align: center;
          margin-top: 10px;
        }
      }
    }
  }
}
@media only screen and (max-width: 360px) {
  .footer {
    padding: 30px 30px 0;
    .row.footer-bottom {
      margin: 0 -30px;
      padding: 15px 30px;
    }
  }
}
</style>