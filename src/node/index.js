const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const cors = require('cors');
const mysql = require('mysql');
const db = mysql.createPool({
    host: 'localhost',     
    user:'root',            
    password: '123456',     
    database: 'test'        
})
app.use(cors())


app.get('/api/get', (req, res) => {
    db.query('select * from zjc where id = 4',(err,result) => {
        if(err){
            console.log(err+'err')
        }
        res.send({
            status:0,
            msg: 'success',
            data:result,
        })
    })
})

app.put('/api/put', (req, res) => {
    const sqlStr = 'update zjc set name=?,age=? where id = 4'
    db.query(sqlStr,[req.body.name,req.body.age],(err,result)=>{
        if(err){
            console.log(err+'err');
        }
        if(result.affectedRows ===  1){
            console.log('success');
        }
        res.send({
            status:0,
            msg:"post请求成功",
            data:req.body
        })
    })
})

//启动服务器
app.listen(80,()=>{
    console.log('express running at http://127.0.0.1')   //启动成功的回调
})