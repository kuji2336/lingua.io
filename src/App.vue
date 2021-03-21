<template>
<app-header></app-header>
<router-view></router-view>
<famous-words></famous-words>
<app-footer></app-footer>
</template>

<script>
import AppHeader from '@/layouts/AppHeader'
import AppFooter from '@/layouts/AppFooter'
import famousWords from '@/global/famousWords'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    famousWords

  },
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
p{
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: "primefont";
  src: url(assets/fonts/Staatliches-Regular.ttf);
}

@font-face {
  font-family: "secondaryfont";
  src: url(assets/fonts/YuseiMagic-Regular.ttf);
}
</style>
