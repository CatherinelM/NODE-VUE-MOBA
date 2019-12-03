//服务端接口
const  express =require('express')

const app=express()

app.set('secret','hdfehf23egf8f')

//中间键
app.use(require('cors')()) //引用跨域模块
app.use(express.json())
// app.use('/api2/users',userRouter)
app.use('/uploads',express.static(__dirname+'/uploads'))//托管静态文件

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

app.listen(3000,()=>{
  console.log('http://localhost:3000');
})