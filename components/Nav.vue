<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://www.brown.edu">
        BrownLogo
      </a>

      <a class="navbar-item" href="https://ccv.brown.edu">
        CCVLogo
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
      <div class="navbar-start">
        <a class="navbar-item" href="https://bnc.brown.edu/xnat">XNAT</a>
        <a class="navbar-item" href="https://bnc.brown.edu">Documentation</a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <Login />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Login from '~/components/Login.vue'

export default {
  components: {
    Login
  },
  data: () => ({
    isActive: false
  })
}
</script>
