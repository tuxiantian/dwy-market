<template lang="html">
  <div class="info-item">
    <p>
      {{title}}
    </p>
    <h3 class="margin-top">{{desc}}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title:String,
    desc:String
  },
}
</script>

<style lang="scss">
.info-item{
  width: 50%;
  text-align: center;
  padding: 10px;
  flex: none;
  *{
    margin:0;
  }
}
</style>
