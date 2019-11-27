// import AdminUserEdit from "../../../admin/src/views/AdminUserEdit";

module.exports =app=>{
  const express=require('express')
  const assert = require('http-assert')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../../models/AdminUser')
  const router=express.Router({
    mergeParams:true //合并类型参数
  })
  // const Category=require('../../models/Category')

  // 分类接口

  //创建资源 创建分类
  router.post('/',async(req,res)=>{
    const model = await req.Model.create(req.body)
    res.send(model)
  })
// 更新资源
  router.put('/:id',async(req,res)=>{
    const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
    res.send(model)
  })


  // 删除资源的接口
  router.delete('/:id',async(req,res)=>{
    await req.Model.findByIdAndDelete(req.params.id,req.body)
    res.send({
      success:true
    })
  })

// 资源列表  获取数据接口
  router.get('/',async(req,res)=>{
    // console.log(req.user)
    // const modelName=require('inflection').classify(req.params.resource)
    // const Model=require(`../../models/${modelName}`)
    const queryOptions={}
    if(req.Model.modeName ==='Category'){
      queryOptions.populate='parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(10)
    res.send(items)
  })
// 资源详情 获取详情页接口
  router.get('/:id',async(req,res)=>{
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })
// 登录校验中间件
  const authMiddleware=require('../../middleware/auth')

  const resourceMiddleware=require('../../middleware/resource')

  app.use('/admin/api/rest/:resource',authMiddleware(),resourceMiddleware(),router)

  // 上传照片文件
  const multer=require('multer')
  const upload=multer({dest:__dirname+'/../../uploads'})
  app.post('/admin/api/upload',authMiddleware(),upload.single('file'),async(req,res)=>{
    const file=req.file
    file.url=`http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  //登录接口
  app.post('/admin/api/login',async(req,res)=>{
    const { username,password }=req.body  //定义一个解构赋值
    //1.根据用户名找用户

    const user=await AdminUser.findOne({username}).select('+password')
    assert(user,422,'用户不存在')
    // if(!user){
    //   return res.status(422).send({
    //     message:'用户不存在'
    //   })
    // }
    //2.校验密码
    const isValid = require('bcryptjs').compareSync(password,user.password)
    assert(isValid,422,'密码错误')
    // if (!isValid){
    //   return res.status(422).send({
    //     message: '密码错误'
    //   })
    // }
    //3.返回token

    //生成一个token
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token })
  })

  // 错误处理函数
  app.use(async (err, req, res, next) => {
    // console.log(err)
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}