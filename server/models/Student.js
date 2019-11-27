// 模型文件
const mongoose =require('mongoose')

const schema =new mongoose.Schema({
  name:{ type:String },
  avatar:{ type:String },
  title:{ type:String },
  categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
  //评分
  scores:{
    difficult:{type:Number},
    skills:{type:Number},
    attack:{type:Number},
    survive:{type:Number},
  },
  //技能
  skills:[{
    icon:{type:String},
    name:{type:String},
    description:{type:String},
    tips:{type:String}
  }],
  //装备 1顺风出装 2 逆风出装 使用技巧 对抗技巧 团站思路 搭档
  items1:[{type:mongoose.SchemaTypes.ObjectId,ref:'Item'}],
  items2:[{type:mongoose.SchemaTypes.ObjectId,ref:'Item'}],
  usageTips:{type:String},
  battleTips:{type:String},
  teamTips:{type:String},
  partners:[{
    student:{type:mongoose.SchemaTypes.ObjectId,ref:'Student'},
    description: {type:String}
  }]
})

module.exports = mongoose.model('Student',schema)