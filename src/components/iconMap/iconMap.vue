<template id="">
  <div class="iconMap">
      <span class="icon" :class="[classMap[Types.type],Type]"></span>
  </div>
</template>

<script>
  export default{
    props: {
      Types: {
         type: Object
      },
      number: {
        type: String
      }
    },
    created() {
      this.classMap = ['decrease','discount','special','invoice','guarantee']
    },
    computed: {
      Type() {
        let Type = "";
        if(this.number === '1'){
          Type = "type1"
        }else if(this.number === '2'){
          Type = "type2"
        }else if(this.number === '3'){
          Type = "type3"
        }else if(this.number === '4'){
          Type = "type3"
        }
        return Type
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/scss/mixin.scss';
  .iconMap{
    display: inline-block;
    vertical-align: top;
    margin-right: 4px;
    .icon{
      display: inline-block;
      vertical-align: top;
      width: 12px;
      height: 12px;
      background-size: 12px;
      background-repeat: no-repeat;
      &.type2{
        margin-top: 2px;
      }
      &.decrease.type1{
        @include bg-image('decrease_1')
      }
      &.discount.type1{
        @include bg-image('discount_1')
      }
      &.guarantee.type1{
        @include bg-image('guarantee_1')
      }
      &.invoice.type1{
        @include bg-image('invoice_1')
      }
      &.special.type1{
        @include bg-image('special_1')
      }
      &.decrease.type2{
        @include bg-image('decrease_2')
      }
      &.discount.type2{
        @include bg-image('discount_2')
      }
      &.guarantee.type2{
        @include bg-image('guarantee_2')
      }
      &.invoice.type2{
        @include bg-image('invoice_2')
      }
      &.special.type2{
        @include bg-image('special_2')
      }
      &.decrease.type3{
        @include bg-image('decrease_3')
      }
      &.discount.type3{
        @include bg-image('discount_3')
      }
      &.guarantee.type3{
        @include bg-image('guarantee_3')
      }
      &.invoice.type3{
        @include bg-image('invoice_3')
      }
      &.special.type3{
        @include bg-image('special_3')
      }
      &.decrease.type3{
        @include bg-image('decrease_4')
      }
      &.discount.type3{
        @include bg-image('discount_4')
      }
      &.guarantee.type3{
        @include bg-image('guarantee_4')
      }
      &.invoice.type3{
        @include bg-image('invoice_4')
      }
      &.special.type3{
        @include bg-image('special_4')
      }
    }
  }
</style>
