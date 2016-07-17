<template>
  <div class="view-container">
    <router-view class="view" keep-alive></router-view>
  </div>
</template>

<script type="text/babel">
  import Loading from 'vux/src/components/loading'
  import Toast from 'vux/src/components/toast'
  import Alert from 'vux/src/components/alert'
  import Confirm from 'vux/src/components/confirm'

  export default {
    components:{
      Loading,
      Toast,
      Alert,
      Confirm
    }
  }

</script>

<style lang="scss">
  @import "scss/style.scss";
  @import "scss/icon.css";
  .weui_cell p{
    margin:0;
  }
  .checkbox.checkbox-small{
    &>input[type="checkbox"]{
      width: 24px;
      height: 24px;
    }
  }
</style>
