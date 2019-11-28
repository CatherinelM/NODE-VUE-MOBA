<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/gq.jpg">
      </swiper-slide>
      <swiper-slide>
        <swiper-slide>
          <img class="w-100" src="../assets/images/a.jpg">
        </swiper-slide>
      </swiper-slide>
      <swiper-slide>
        <swiper-slide>
          <img class="w-100" src="../assets/images/b.jpg">
        </swiper-slide>
      </swiper-slide>
      <swiper-slide>
        <swiper-slide>
          <img class="w-100" src="../assets/images/c.jpg">
        </swiper-slide>
      </swiper-slide>
      <div class="swiper-pagination pagination-home"  slot="pagination"></div>
    </swiper>

<!--    end of swipper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1" >
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3"  v-for="n in 8" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>︽收起</span>
      </div>
    </div>

    <!--    end of nav icons  -->
    <m-card icon="menu" title="新闻资讯">

<!--      <div class="card-body pt-3">-->
        <div class="nav jc-between">
          <div class="nav-item active ">
            <div class="nav-link">热门</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">新闻</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">公告</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">活动</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">赛事</div>
          </div>
        </div>
        <div class="pt-3">
          <swiper>
            <swiper-slide v-for="m in 5" :key="m">
              <div class="py-2" v-for="n in 5" :key="n">
                <span>[新闻]</span>
                <span>|</span>
                <span>嘻嘻嘻嘻嘻每天的明都要快乐呀</span>
                <span>20+n</span>
              </div>
            </swiper-slide>
          </swiper>
        </div>

<!--      </div>-->


    </m-card>


<!--    <div class="card p-3 bg-white p-3 mt-3">-->
<!--      <div class="card-header d-flex ai-center pb-3">-->
<!--        <i class="iconfont icon-menu"></i>-->
<!--        <div class="fs-xl flex-1 px-2">新闻资讯</div>-->
<!--        <i class="iconfont">...</i>-->
<!--      </div>-->
<!--      </div>-->


  </div>
</template>

<script>
  export default {
    data(){
      return {
        swiperOption:{
          // 设置自动轮播
          loop:true,
          autoplay:{
            delay: 2000,
            stopOnLastSlide: false,
            /* 触摸滑动后是否继续轮播 */
            disableOnInteraction: false
          },
          pagination:{
            el:'.pagination-home'
          },
          // autolay:true
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/variables";
  .nav-icons{
    border-left: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
  }
  .nav-icons .nav-item{
    width: 33%;
    border-left: 1px solid $border-color;
    &:nth-child(4n+1){
      border-left:none;
    }
  }
  .card {
    .card-header {
      border-bottom: 1px solid $border-color;
    }
    border-bottom: 1px solid $border-color;
  }
</style>