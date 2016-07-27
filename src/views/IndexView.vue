<template lang="html">
  <div>
    <router-view keep-alive transition="fade"></router-view>
  </div>
</template>

<script>
import BaseView from './BaseView'

export default BaseView.extend({
  created(){
    this.syncCartItems(this.$root.UID);
    this.syncConsignees(this.$root.UID);
  }
});
</script>
