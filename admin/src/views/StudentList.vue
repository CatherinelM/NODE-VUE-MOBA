<template>
  <div>
    <h2>学生列表</h2>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="220"></el-table-column>
      <!--      <el-table-column prop="parent.name" label="上级分类" ></el-table-column>-->
      <el-table-column prop="name" label="学生名称" ></el-table-column>
      <el-table-column prop="title" label="称号" ></el-table-column>
      <el-table-column prop="avatar" label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" style="height: 3rem">
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <!--                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
          <el-button type="text" size="small"
                     @click="$router.push(`/students/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text" size="small"
                     @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "StudentList",
    data(){
      return {
        items:[]
      }
    },
    methods:{
      async fetch(){
        const res =await this.$http.get('rest/students')
        this.items=res.data
      },
      async remove(row){
        this.$confirm(`是否确认删除分类"${row.name}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          const res =await this.$http.delete(`rest/students/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          // 删除成功后再次获取新数据
          this.fetch()
        })
      }
    },
    created() {
      this.fetch()

    }
  }
</script>

<style scoped>

</style>