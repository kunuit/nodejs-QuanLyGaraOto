var express = require('express');
var router = express.Router();

const {getMax, updateMax} = require('../controller/thamSo.controller')

// get sửa xe tối đa
router.get('/', getMax);
// post sửa xe tối đa
router.put('/', updateMax)

router.get('/', (req, res) => {
  res.send('aloalo')
})

module.exports = router;
