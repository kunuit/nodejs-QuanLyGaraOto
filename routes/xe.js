var express = require('express');
var router = express.Router();

const {createOne, createOneHX, getHX, getAll, deleteX, getXeby, thuTien} = require('../controller/xe.controller')
// TODO get all xe
router.get('/', getAll)
// post phieu tiep nhan
router.post('/', createOne);
// get hieu xe
router.get('/hieuXe', getHX)
// post hieu xe
router.post('/hieuXe', createOneHX)
// delete xe
router.delete('/:bienSoXe', deleteX)
// search xe
router.get('/:data', getXeby)
// thu tien tien 
router.post('/thuTien', thuTien)
router.get('/', (req, res) => {
  res.send('aloalo')
})

module.exports = router;
