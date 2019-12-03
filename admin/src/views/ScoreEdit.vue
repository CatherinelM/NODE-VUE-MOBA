<template>
  <div class="main-score">
    <el-card shadow="never">
      <el-form :inline="true" :model="score">
        <el-form-item label="学年">
          <el-select v-model="score.year" placeholder="学年">
            <el-option label="2019-2020学年" value="2019-2020"></el-option>
            <el-option label="2020-2021学年" value="2020-2021"></el-option>
            <el-option label="2021-2022学年" value="2021-2022"></el-option>
            <el-option label="2022-2023学年" value="2022-2023"></el-option>
            <el-option label="2023-2024学年" value="2023-2024"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学期">
          <el-select v-model="score.term" placeholder="学期">
            <el-option label="第一学期" value="1"></el-option>
            <el-option label="第二学期" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <Table :tableData="tableData" :tableHeader="tableHeader" :total="total" :customSort="customSort" :colWidth="colWidth"></Table>
  </div>
</template>

<!--<script>-->
<!--  export default {-->
<!--    data() {-->
<!--      return {-->
<!--        score: {-->
<!--          year: "2019-2020",-->
<!--          term: "1"-->
<!--        },-->
<!--        tableData: [],-->
<!--        tableHeader: SCORE_HEAER,-->
<!--        total: 0,-->
<!--        customSort: ['xuefen','zongpingfenshu'],-->
<!--        colWidth: {-->
<!--          xuenian: "150px",-->
<!--          kecheng: "250px",-->
<!--          kechengleibie: "150px"-->
<!--        }-->
<!--      };-->
<!--    },-->
<!--    mounted() {-->
<!--      this.getScore();-->
<!--    },-->
<!--    methods: {-->
<!--      onSubmit() {-->
<!--        this.getScore()-->
<!--      },-->
<!--      async getScore() {-->
<!--        try {-->
<!--          let res = await _score.getScore();-->
<!--          if (res.status == 200 && res.data.code && res.data.code == 200) {-->
<!--            this.tableData = res.data.data.list;-->
<!--            this.total = parseInt(res.data.total);-->
<!--          } else {-->
<!--            this.$message.info({ showClose: true, message: "查询失败" });-->
<!--          }-->
<!--        } catch (e) {-->
<!--          console.log(e);-->
<!--        }-->
<!--      }-->
<!--    },-->
<!--    components: {-->
<!--      Table: () => import("@/components/Table")-->
<!--    }-->
<!--  };-->
<!--  // export default {-->
<!--  //   name: "ItemEdit",-->
<!--  //   props:{-->
<!--  //     id:{}-->
<!--  //   },-->
<!--  //   data(){-->
<!--  //     return{-->
<!--  //       model:{}-->
<!--  //     }-->
<!--  //   },-->
<!--  //   methods:{-->
<!--  //-->
<!--  //     async save(){-->
<!--  //       // console.log('save')-->
<!--  //       // 新建和修改并存 写在一个方法里面-->
<!--  //       let res-->
<!--  //       if(this.id){-->
<!--  //         res=await this.$http.put(`rest/items/${this.id}`,this.model)-->
<!--  //       }else{-->
<!--  //         res=await this.$http.post('rest/items',this.model)-->
<!--  //       }-->
<!--  //       this.$router.push('/items/list')-->
<!--  //       this.$message({-->
<!--  //         type:'success',-->
<!--  //         message:'保存成功'-->
<!--  //       })-->
<!--  //     },-->
<!--  //     async fetch(){-->
<!--  //       const res=await this.$http.get(`rest/items/${this.id}`)-->
<!--  //       this.model=res.data-->
<!--  //     },-->
<!--  //     // async fetchParents(){-->
<!--  //     //   const res=await this.$http.get(`rest/categories`)-->
<!--  //     //   this.parents=res.data-->
<!--  //     // }-->
<!--  //   },-->
<!--  -->
<!--  //-->
<!--  //   created() {-->
<!--  //     // this.fetchParents()-->
<!--  //     this.id && this.fetch()-->
<!--  //   }-->
<!--  // }-->
<!--</script>-->

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>