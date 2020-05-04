<template>
  <div class="nav">
    <div class="title">carrie_vrtis</div>
    <hr />
    <router-link to="/" class="nav-item accent"><font-awesome-icon icon="home" /> {{ $t('home') }}</router-link>
    <hr />
    <router-link to="/about" class="nav-item accent"><font-awesome-icon icon="user-secret" /> {{ $t('about') }}</router-link>
    <hr />
    <router-link to="/code" class="nav-item accent"><font-awesome-icon icon="terminal" /> {{ $t('code') }}</router-link>
    <hr />
    <router-link to="/photo" class="nav-item accent"><font-awesome-icon icon="camera" /> {{ $t('photo') }}</router-link>
    <hr />
    <router-link to="/contact" class="nav-item accent"><font-awesome-icon icon="envelope" /> {{ $t('contact') }}</router-link>
  </div>
</template>

<style scoped lang="scss">
.nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 15rem;
  height: 100vh;
  background: rgba(0, 0, 0, 0.33);
  border-right: 0.5rem solid #00000080;
  overflow: hidden;
  div, a {
    text-align: center;
    width: 100%;
    display: block;
    padding: 0.25rem 0;
  }
}
.title {
  font: 2.1rem Inconsolata, monospace;
  margin-top: 1rem;
}
.nav-item {
  font: 1.5rem Inconsolata, monospace;
  text-decoration: none;
}
hr {
  width: 90%;
  margin: 1rem auto;
  border: 1px solid;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Nav extends Vue {}
</script>

<i18n>
{
  "en": {
    "home": "Home",
    "about": "About",
    "code": "Code",
    "photo": "Photography",
    "contact": "Contact"
  },
  "es": {
    "home": "Inicio",
    "about": "Acerca De",
    "code": "Código",
    "photo": "Fotografía",
    "contact": "Contácteme"
  }
}
</i18n>
