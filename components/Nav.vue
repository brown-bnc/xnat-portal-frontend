<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://www.brown.edu">
        <BrownLogo />
      </a>

      <a class="navbar-item" href="https://ccv.brown.edu">
        <CCVLogo />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navMenu"
        :class="{ 'is-active': isActive }"
        @click="isActive = !isActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navMenu" class="navbar-menu" :class="{ 'is-active': isActive }">

      <div class="navbar-end">
        <a class="navbar-item" href="https://bnc.brown.edu/xnat"
          >XNAT
          <DIcon name="external-link-alt" family="light" class="ml-2" />
        </a>
        <a class="navbar-item" href="https://bnc.brown.edu"
          >Documentation
          <DIcon name="external-link-alt" family="light" class="ml-2"
        /></a>
        <div class="navbar-item">
          <Login />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { BrownLogo, CCVLogo, DIcon } from '@brown-ccv/disco-vue-components'
import Login from '~/components/Login.vue'

export default {
  components: {
    Login,
    BrownLogo,
    CCVLogo,
    DIcon
  },
  data: () => ({
    isActive: false
  })
}
</script>
