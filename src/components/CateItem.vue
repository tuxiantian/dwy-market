<template lang="html">
  <div class="cate-item">
    <div class="cate-item-border">
      <img :src="img" alt="" />
      <h1 class="title" v-text="title"></h1>
      <h5 class="sub-title" v-text="subTitle"></h5>

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
    subTitle:String,
    img:String
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
    position: relative;
    height: 100%;
    padding: $content-padding;
    border:1px solid $stable;
    &>img{
      width: 60%;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
}
</style>
