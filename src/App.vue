<template>
  <div id="app">
    <doubanHeader></doubanHeader>
    <div class="app_content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import DoubanHeader from './components/DoubanHeader'
export default {
  name: 'app',
  components:{
    DoubanHeader
  }
}
</script>
<style lang="less">
  @import 'assets/style';
</style>
