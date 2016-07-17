<template lang="html">
  <div class="cate-item">
    <div class="cate-item-border">
      <h1 class="title">情趣用品</h1>
      <h5 class="sub-title">fuck things</h5>
    </div>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  props:{
    title:String,
    subTitle:String
  }
}
</script>

<style lang="scss">
@import "../scss/variables.scss";
@import "../scss/mixins";

.cate-item{
  width: 50%;
  height: 150px;
  padding: $content-padding $content-padding 0;

  &:nth-child(2n-1){
    padding-right: $content-padding/2;
  }

  &:nth-child(2n){
    padding-left: $content-padding/2;
  }
  .title{
    font-size: $font-size-secondary;
  }

  .sub-title{
    font-size: $font-size-small;
    color:$gray;
  }

  .title,.sub-title{
    margin-top: 0;
    margin-bottom: $content-padding/2;
  }
  &>.cate-item-border{
    height: 100%;
    padding: $content-padding;
    border:1px solid $stable;
  }
}
</style>
