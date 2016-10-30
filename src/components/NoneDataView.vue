<template>
  <div class="view flex center bg-light" >
    <div>
      <div class="text-center">
        <i class="icon" style="font-size:36px;" :class="iconName">

        </i>
      </div>
      <h4 class="text-center">{{text}}</h4>
    </div>


  </div>
</template>

<script lang="babel">

  export default{
    props:{
      icon:{
        type:String,
        default:'building-o'
      },
      text:{
        type:String,
        default:'没有更多数据'
      }
    },
    computed:{
      iconName(){
        return `icon-${this.icon}`;
      }
    }
  }

</script>
