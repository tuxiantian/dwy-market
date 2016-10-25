<template lang="html">
  <div class="item item-avatar">
    <img :src="fans.imgurl">
    <h4>{{fans.nickname}}</h4>
    <p>{{fans.address}}</p>
  </div>
</template>
<script lang="babel">
  export default{
    props: {
      fans: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>
<style lang="scss">

</style>