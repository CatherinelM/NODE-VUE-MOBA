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

    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <div class="py-2 fs-lg d=flex" v-for="(news,i) in category.newsList" :key="i">
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis px-2">{{news.title}}</span>
          <span>{{news.date}}</span>
        </div>
      </template>
    </m-list-card>

    <m-list-card icon="menu" title="英雄列表" :categories="studentCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem;">
          <div class="p-2 text-center"  style="width: 20%;"
               v-for="(student,i) in category.studentList" :key="i">
            <img :src="student.avatar" class="w-100">
            <div>{{student.name}}</div>
          </div>
        </div>
      </template>
    </m-list-card>

    <m-card icon="menu" title="精彩视频"></m-card>


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
          }
          // autolay:true
        },
        newsCats:[
          // {
          //   name:'热门',
          //   newsList:new Array(5).fill(1).map(v=>({
          //     categoryName:'公告',
          //     title:'每天都要快快乐乐可可爱爱',
          //     date:'01/16'
          //   }))
          // },
          // {
          //   name:'新闻',
          //   newsList:new Array(5).fill(1).map(v=>({
          //     categoryName:'新闻',
          //     title:'每天都要快快乐乐可可爱爱',
          //     date:'01/16'
          //   }))
          // }
        ],
        studentCats:[

        ]
      }
    },
    methods:{
      async fetchNewsCats(){
        const res =await this.$http.get('news/list')
        this.newsCats=res.data
      },
      async fetchStudentCats(){
        const res =await this.$http.get('students/list')
        this.studentCats=res.data
      }
    },
    // 页面刚进来的时候做什么事情
    created() {
      this.fetchNewsCats();
      this.fetchStudentCats();
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