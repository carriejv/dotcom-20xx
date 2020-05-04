<template>
  <div id="app" class="solar-dark solar-green">
    <Nav/>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Cairo, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.interactive {
    cursor: pointer;
}

.no-ani {
  animation: none !important;
  transition: none !important;
  * {
        animation: none !important;
        transition: none !important;
  }
}

.no-touch {
  pointer-events: none;
  user-select: none;
  * {
    pointer-events: none;
    user-select: none;
  }
}

a, h1, h2, h3, h4, h5, .interactive, .accent {
  font: Inconsolata, monospace;
}

button {
  padding: 1.0rem;
}

html, .solar-dark {
  @include colorize($base03, $base1);
}

.solar-light {
    @include colorize($base3, $base01);
}

$accent-options: ("blue": $blue, "cyan": $cyan, "green": $green, "magenta": $magenta, "orange": $orange, "red": $red, "violet": $violet, "yellow": $yellow);
@each $accent-name, $accent-color in $accent-options {
    .solar-#{$accent-name} {
        @include accentize($accent-color)
    }
}

</style>

<script lang="ts">
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>
