const { connect } = require("../connection");

const getCar = async (info) => {
  try {
    var query = `select * from Xe`;
    const data = await connect.query(query);
    return {
      code: "200",
      data: data.recordset,
    };
  } catch (error) {
    return {
      code: "400",
      error: error.originalError.info.message,
    };
  }
};

const deleteXe = async (info) => {
  try {
    console.log(info)
    var query = `delete from xe where (bienSoXe = '${info.bienSoXe}')`;
    const data = await connect.query(query);
    return {
      code: "200",
      data,
    };
  } catch (error) {
    return {
      code: "400",
      error: error.originalError.info.message,
    };
  }
};

const searchXe = async (info) => {
  console.log(info.data, typeof(info.data))
  let parsed = parseInt(info.data)
  console.log(parsed, typeof(parsed))
  try {
    var query = `select * from xe where BienSoXe ='${info.data}' or tenChuXe='${info.data}' or maHX= ${parsed}`;
    const data = await connect.query(query);
    console.log(data)
    return {
      code: "200",
      data: data.recordset,
    };
  } catch (error) {
    return {
      code: "400",
      error: error.originalError.info.message,
    };
  }
};

const thuTienXe = async (info) => {
  try {
    var addtienNo = `update Xe SET tienNo = tienNo - ${info.tienThu}
    Where bienSoXe = '${info.bienSo}'`;
    const data = await connect.query(addtienNo);
    return {
      code: "200",
      data
    }
  } catch (error) {
    return {
      code: "400",
      error: error.originalError.info.message,
    };
  }
}

const createFixCar = async (info) => {
  try {
    const { bienSoXe, tenChuXe, sdt, diaChi, email, maHX, ngayTiepNhan } = info;
    console.log(info)
    var query = `insert into XE values ('${bienSoXe}', N'${tenChuXe}','${sdt}','${diaChi}','${email}',${maHX},'${ngayTiepNhan}', 0)`;
    console.log(query)
    const data = await connect.query(query);
    console.log(data)
    return {
      code: "200",
      data,
    };
  } catch (error) {
    return {
      code: "400",
      error: error.originalError.info.message,
    };
  }
};

const createHX = async (info) => {
  try {
    var query = `insert into HieuXe values (N'${info.hieuXe}')`;
    const data = await connect.query(query);
    return {
      code: "200",
      data,
    };
  } catch (error) {
    return {
      code: "400",
      error: error.originalError.info.message,
    };
  }
};

const getAllHX = async (info) => {
  try {
    var query = `select * from hieuXe`;
    const data = await connect.query(query);
    return {
      code: "200",
      data: data.recordset
    };
  } catch (error) {
    return {
      code: "400",
      error: error.originalError.info.message,
    };
  }
};

const deleteHX = async (info) => {
  try {
    var query = `delete from HieuXe where (maHX = ${info.maHX})`;
    const data = await connect.query(query);
    return {
      code: "200",
      data,
    };
  } catch (error) {
    return {
      code: "400",
      error: error.originalError.info.message,
    };
  }
};

module.exports = {
  createFixCar,
  createHX,
  deleteHX,
  getCar,
  searchXe,
  deleteXe,
  thuTienXe,
  getAllHX
};
