const express = require('express')
const router = express.Router()

router.get('/', (_req, res) =>{
  res.send('products')
})

module.exports = router