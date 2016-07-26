<template lang="html">

<header class="bar bar-header bar-dark" :class="className">
    <slot>
        <slot name="left">
            <button class="button button-icon back-button" v-show="showBackButton" @click.stop="goBack()">
                <i class="icon icon-angle-left"></i>
            </button>
        </slot>
        <h3 class="title" v-text="title" v-if="!isSearch"></h3>

        <template v-if="isSearch">
            <label class="item-input-wrapper" :class="{'margin-left':showBackButton}">
                <i class="icon ion-ios-search placeholder-icon"></i>
                <input type="search"
                v-model="value"
                @input="onInput"
                @focus="onInputFocus"
                @blur="onInputBlur"
                :placeholder="placeholder">
            </label>
        </template>
        <slot name="right">

        </slot>
    </slot>
</header>

</template>

<script>

import {
    MODE_HEADER_DEF, MODE_HEADER_SEARCH
}
from '../const'
export default {
    data: function() {
        return {
          isFocus:false
        }
    },
    props: {
        mode: {
            type: String,
            default: MODE_HEADER_DEF
        },
        showBack: {
            type: Boolean,
            default: true
        },
        title: String,
        cancelText: {
            type: String,
            default: '取消'
        },
        placeholder: {
            type: String,
            default: '搜索'
        },
        value:{
          type:String,
          twoWay:true
        },
        showRight: {
          type:Boolean,
          default:false
        }
    },
    computed: {
      isSearch() {
          return this.mode === MODE_HEADER_SEARCH;
        },
        className() {
          return this.isSearch ? 'item-input-inset' : ''
        },
        showBackButton() {
          return this.showBack && window.history.length >= 1;
        },
        showCancelButton(){
          return this.isFocus;
        }
    },
    ready: function() {},
    methods: {
      onInputFocus(e) {
        this.isFocus = true;
        this.$emit('on-focus',e);
      },
      onInputBlur() {
        this.isFocus = false;
      },
      onInput(e) {
        this.$emit('on-input', e);
      },
      onCancel(e){
        this.$emit('on-cancel',e);
      },
      goBack(e) {
        window.history.back();
      }
    },
    components: {}
}

</script>
