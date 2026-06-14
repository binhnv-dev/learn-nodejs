const express = require('express')
require('dotenv').config()
const connection = require('./config/database')

const app = express();

//routes
const homeRouter = require('./routes/api/home')
const productRouter = require('./routes/api/product')



const {PORT} = process.env

app.use('/', homeRouter)
app.use('/products', productRouter)

const testConnectionDatabase = async () =>{
  try  {
    const [results] = await connection.execute(
      'SELECT * FROM `users` WHERE `name`= ? AND `age` >= ?', ['Binh', 26] 
    )
    console.log('result',results)
  } catch (error) {
    console.error('database query failed', error.message)
  }
}

testConnectionDatabase()

app.listen(PORT, () =>{
  console.log('Start BE with port:', PORT)
})