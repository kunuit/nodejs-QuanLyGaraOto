const {getAllThamSoMax, updateThamSoMax} = require('../models/thamSo.modal')

const getMax = async (req,res) => {
  
  const data = await getAllThamSoMax(req.body);

  if (data.code == 200) res.send(data)
  else res.status(400).send(data)
}

const updateMax = async (req,res) => {
  const data =  await updateThamSoMax(req.body)

  if (data.code == 200) res.send(data)
  else res.status(400).send(data)
}

module.exports = {getMax, updateMax}