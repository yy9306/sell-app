<template>
  <div id="app">
     <v-header :seller = "seller"></v-header>
     <div class="tab">
         <div class="tab-item">
            <router-link to="/goods">商品</router-link>
         </div>
         <div class="tab-item">
           <router-link to = "/ratings">评论</router-link>
         </div>
         <div class="tab-item">
           <router-link to = "/seller">商家</router-link>
         </div>
     </div>
     <transition name="fade" mode="out-in">
       <keep-alive>
         <router-view :seller = "seller"></router-view>
       </keep-alive>
     </transition>
  </div>
</template>

<script>
import vHeader from './components/header/header'
const  ERR_OK = 0;

export default {
  components: {
     vHeader
  },
  data() {
    return {
      seller: {}
    }
  },
  created() {
    this.$http.get('/api/seller').then((response) => {
       response = response.body;
       if(response.errno === ERR_OK){
          this.seller = response.data;
       }
    })
  }
}
</script>

<style lang="scss" scoped>
@import './common/scss/mixin.scss';
  #app{
    .tab{
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      @include border-1px(rgba(7,17,21,0.1));
      .tab-item{
        flex: 1;
        text-align: center;
        a{
          display: block;
          font-size: 14px;
          color:rgb(77,85,93);
          &.active{
            color: rgb(240,20,20);
          }
        }
      }
    }
    .fade-enter {
      opacity:0;
    }
    .fade-leave{
      opacity:1;
    }
    .fade-enter-active{
      transition:opacity .5s;
    }
    .fade-leave-active{
      opacity:0;
      transition:opacity .5s;
    }
  }
</style>
