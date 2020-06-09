const {
  createSuaChuaCar,
  getAllTienCong,
  updateTienCong,
  deleteTienCong,
  getAllPhuTung,
  updatePhuTung,
  deletePhuTung,
  createPhuTung,
  createTienCong
} = require("../models/suaChua.modal");

// const getAll = async (req,res) => {
//  const data = await getCar()
//   if (data.code == 200) res.send(data)
//   else res.status(400).send(data)
// }

const createOne = async (req, res) => {
  console.log(req.body);
  const data = await createSuaChuaCar(req.body);

  if (data.code == 200) res.send(data);
  else res.status(400).send(data);
};

const getAllPT = async (req, res) => {
  const data = await getAllPhuTung();

  if (data.code == 200) res.send(data);
  else res.status(400).send(data);
};

const updatePT = async (req, res) => {
  const data = await updatePhuTung(req.body);

  if (data.code == 200) res.send(data);
  else res.status(400).send(data);
};

const deletePT = async (req, res) => {
  const data = await deletePhuTung(req.body);
  if (data.code == 200) res.send(data);
  else res.status(400).send(data);
};

const getAllTC = async (req, res) => {
  const data = await getAllTienCong();

  if (data.code == 200) res.send(data);
  else res.status(400).send(data);
};

const updateTC = async (req, res) => {
  const data = await updateTienCong(req.body);

  if (data.code == 200) res.send(data);
  else res.status(400).send(data);
};

const deleteTC = async (req, res) => {
  const data = await deleteTienCong(req.body);
  if (data.code == 200) res.send(data);
  else res.status(400).send(data);
};

const createTC = async (req, res) => {
  const data = await createTienCong(req.body);
  if (data.code == 200) res.send(data);
  else res.status(400).send(data);
};

const createPT = async (req, res) => {
  const data = await createPhuTung(req.body);
  if (data.code == 200) res.send(data);
  else res.status(400).send(data);
};

module.exports = {
  createOne,
  getAllPT,
  updatePT,
  deletePT,
  getAllTC,
  updateTC,
  deleteTC,
  createPT,
  createTC
};
