<template>
  <m-card :icon="icon" :title="title">
    <div class="nav jc-between">
      <div class="nav-item" :class="{active:active === i}"
           v-for="(category,i) in categories" :key="i"
           @click="$refs.list.swiper.slideTo(i)" >
        <div class="nav-link">{{category.name}}</div>
      </div>
    </div>
    <div class="pt-3">
      <swiper ref="list" @slide-change="()=>active=$refs.list.swiper.realIndex">
        <swiper-slide v-for="(category,i) in categories" :key="i">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
<!--        <swiper-slide v-for="m in 5" :key="m">-->
<!--          <div class="py-2" v-for="n in 5" :key="n">-->
<!--            <span>[新闻]</span>-->
<!--            <span>|</span>-->
<!--            <span>快快乐乐可可爱爱</span>-->
<!--            <span>01/16</span>-->
<!--          </div>-->
<!--        </swiper-slide>-->
      </swiper>
    </div>

  </m-card>
  
</template>

<script>
  export default {
    name: "ListCard",
    props:{
      icon:{type:String,required:true},
      title:{type:String,required:true},
      categories:{type:Array,required:true},
    },
    data(){
      return{
        active:0
      }
    }
  }
</script>

<style scoped>

</style>