//服务端接口
const  express =require('express')

const app=express()

//中间键
app.use(require('cors')()) //引用跨域模块
app.use(express.json())

require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(3000,()=>{
  console.log('http://localhost:3000');
})