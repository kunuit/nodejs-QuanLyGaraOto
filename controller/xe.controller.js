const {
  getCar,
  createFixCar,
  createHX,
  deleteXe,
  searchXe,
  thuTienXe
} = require("../models/xe.modal");

const getAll = async (req, res) => {
  const data = await getCar();
  if (data.code == 200) res.send(data);
  else res.status(400).send(data);
};

const createOne = async (req, res) => {
  const createFix = await createFixCar(req.body);

  if (createFix.code == 200) res.send(createFix);
  else res.status(400).send(createFix);
};

const createOneHX = async (req, res) => {
  const addHX = await createHX(req.body);

  if (addHX.code == 200) res.send(addHX);
  else res.status(400).send(addHX);
};

const deleteX = async (req, res) => {
  const data = await deleteXe(req.body);
  if (data.code == 200) res.send(data);
  else res.status(400).send(data);
};

const getXeby = async (req, res) => {
  const data = await searchXe(req.params);
  if (data.code == 200) res.send(data);
  else res.status(400).send(data);
};

const thuTien = async (req, res) => {
  const data = await thuTienXe(req.body)
  if (data.code == 200) res.send(data);
  else res.status(400).send(data);
}

module.exports = { createOne, createOneHX, getAll, deleteX, getXeby, thuTien };
