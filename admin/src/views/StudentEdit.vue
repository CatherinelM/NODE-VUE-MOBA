<template>
  <div >
    <h2>{{ id ? '编辑':"新建" }}学生</h2>

    <el-form label-width="120px" @submit.native.prevent="save">
      <el-tabs value="skills" type="border-card" >
        <el-tab-pane label="基础信息">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
                    class="avatar-uploader"
                    :action="$http.defaults.baseURL + '/upload'"
                    :show-file-list="false"
                    :on-success="afterUpload">
              <img v-if="model.avatar" :src="model.avatar" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="model.categories" multiple="">
              <el-option v-for="item of categories" :key="item._id"
                         :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item >

          <el-form-item label="难度">
            <el-rate style="margin-top: 0.6rem" :max="9" show-score v-model="model.scores.difficult"></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate style="margin-top: 0.6rem" :max="9" show-score v-model="model.scores.skills"></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate style="margin-top: 0.6rem" :max="9" show-score v-model="model.scores.attack"></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate style="margin-top: 0.6rem" :max="9" show-score v-model="model.scores.survive"></el-rate>
          </el-form-item>

          <el-form-item label="顺风出装">
            <el-select v-model="model.items1" multiple="">
              <el-option v-for="item of items" :key="item._id"
                         :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item >
          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" multiple="">
              <el-option v-for="item of items" :key="item._id"
                         :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item >

          <el-form-item label="使用技巧、评价">
            <el-input type="textarea" v-model="model.usageTips"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战思路">
            <el-input type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>

        </el-tab-pane>

        <el-tab-pane label="技能" name="skills">
          <el-button size="sm" @click="model.skills.push({})"><i class="el-icon-plus" ></i>添加技能</el-button>
          <el-row type="flex" style="flex-wrap: wrap">
            <el-col :md="12" v-for="(item,i) in model.skills" :key="i">
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload
                        class="avatar-uploader"
                        :action="$http.defaults.baseURL + '/upload'"
                        :show-file-list="false"
                        :on-success="res => $set(item,'icon',res.url)">
                  <img v-if="item.icon" :src="item.icon" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="描述">
                <el-input v-model="item.description" type="textarea"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input v-model="item.tips" type="textarea"></el-input>
              </el-form-item>
<!--              从当前位置删 删1个-->
              <el-button size="small" type="danger"
                         @click="model.skills.splice(i,1)">删除</el-button>

            </el-col>
          </el-row>
        </el-tab-pane>

      </el-tabs>

      <el-form-item style="margin-top: 1rem">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  export default {
    name: "StudentEdit",
    props:{
      id:{}
    },
    data(){
      return{
        categories:[],
        items:[],
        // skills:[],
        model:{
          skills:[],
          name:'',
          avatar:'',
          scores:{
            difficult: 0
          },
        }
      }
    },
    methods:{
      afterUpload(res){
        //vue特有的显示赋值
        // this.$set(this.model,'avatar',res.url)
        this.model.avatar=res.url
      },
      async save(){
        // console.log('save')
        // 新建和修改并存 写在一个方法里面
        let res
        if(this.id){
          res=await this.$http.put(`rest/students/${this.id}`,this.model)
        }else{
          res=await this.$http.post('rest/students',this.model)
        }
        this.$router.push('/students/list')
        this.$message({
          type:'success',
          message:'保存成功'
        })
      },
      async fetch(){
        const res=await this.$http.get(`rest/students/${this.id}`)
        this.model=Object.assign({},this.model,res.data)

      },
      async fetchCategories(){
        const res=await this.$http.get(`rest/categories`)
        this.categories=res.data
      },
    async fetchItems(){
      const res=await this.$http.get(`rest/items`)
      this.items=res.data
    }
      // async fetchParents(){
      //   const res=await this.$http.get(`rest/categories`)
      //   this.parents=res.data
      // }
    },

    created() {
      // this.fetchParents()

      this.id && this.fetch()
      this.fetchCategories()
      this.fetchItems()
    }
  }
</script>

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