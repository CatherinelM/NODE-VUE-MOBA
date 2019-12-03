<!--主页面框架-->
<template>
  <div>
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <div class="px-2 flex-1">
        <div class="text-white">学生综合管理系统</div>
<!--        <div class="text-grey-1 fs-xxs " >啊哈哈哈哈哈哈哈</div>-->
      </div>
      <button type="button" class="btn bg-primary">立即下载</button>
    </div>
    <div class="bg-primary pt-3 pb-2 ">
      <div class="nav pb-1 nav-inverse pb-1 jc-around" >
        <div class="nav-item active">
          <router-link class="nav-link" to="/" tag="div">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/" tag="div">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/" tag="div">赛事中心</router-link>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Main"
  }
</script>

<style lang="scss">
  /*顶部吸顶效果*/
  .topbar {
    position: sticky;
    top: 0;
    z-index: 999;
  }

</style>