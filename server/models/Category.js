// 模型文件
const mongoose =require('mongoose')

const schema =new mongoose.Schema({
  name:{ type:String },
  parent:{type:mongoose.SchemaTypes.Object,ref:'Category'}
})

module.exports = mongoose.model('Category',schema)