var express = require("express");
var router = express.Router();

const {
  createOne,
  getAllTC,
  updateTC,
  deleteTC,
  getAllPT,
  updatePT,
  deletePT,
  createPT,
  createTC
} = require("../controller/suaChua.controller");

// post phieu sua chua
router.post("/", createOne);
// post tien cong
router.post('/tc', createTC)
// get all tien cong
router.get('/tc', getAllTC)
// put update tien cong
router.put('/tc', updateTC) // {triGia maTienCong}
// delete delete tien cong
router.delete('/tc', deleteTC)// {maTienCong}
// get all phu tung
router.get('/pt', getAllPT)
// post phu tung
router.post('/pt', createPT)
// put update phu tung
router.put('/pt', updatePT)// {donGia maPT}
// delete delete phu tung
router.delete('/pt', deletePT)// maPT

router.get("/", (req, res) => {
  res.send("aloalo");
});

module.exports = router;
