<template lang="html">
  <div class="panel">
    <slot name="header">
      <header class="panel-header" v-if="showHeader">
        <h3 class="title" v-text="title"></h3>
      </header>
    </slot>
    <div class="panel-body">
      <slot></slot>
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
    showHeader:{
      type:Boolean,
      default:true
    },
    title:String
  }
}
</script>

<style lang="scss">
@import "../scss/variables.scss";
@import "../scss/mixins";

.panel{
  .panel-header{
    height: $bar-height;
    padding: $content-padding;
    .title{
      margin: 0;
      font-size: $font-size-secondary;
    }
  }
  .panel-body{
    background-color: $light;
  }
}
</style>
