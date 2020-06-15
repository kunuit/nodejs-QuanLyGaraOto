const { connect } = require("../connection");

const createSuaChuaCar = async (info) => {
  try {
    const {
      ngaySuaChua,
      bienSo,
      noiDung,
      maTienCong,
      thanhTienPT,
      tongTien,
    } = info;
    console.log(info)
    var query = `insert into phieuSuaChua values ('${ngaySuaChua}', '${bienSo}', N'${noiDung}',${thanhTienPT},${maTienCong},${tongTien})`;
    const data = await connect.query(query);
    var addtienNo = `update Xe SET tienNo = tienNo + ${tongTien}
    Where bienSoXe = '${bienSo}'`;
    const data2 = await connect.query(addtienNo);
    return {
      code: "200",
      data,
      data2,
    };
  } catch (error) {
    return {
      code: "400",
      error: error.originalError.info.message,
    };
  }
};
// lay het tien cong
const getAllTienCong = async (info) => {
  try {
    const query = `select * from tienCong`;
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


const createTienCong = async (info) => {
  try {
    const {tenTienCong, triGia} = info
    const query = `insert into tienCong values (N'${tenTienCong}',${triGia})`;
    const data = await connect.query(query);
    return {
      code: "200",
      data
    };
  } catch (error) {
    return {
      code: "400",
      error: error.originalError.info.message,
    };
  }
};

const updateTienCong = async (info) => {
  try {
    const query = `update tienCong set trigia = ${info.triGia} where maTienCong = ${info.maTienCong}`;
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

const deleteTienCong = async (info) => {
  try {
    const query = `delete from tienCong where maTienCong = ${info.maTienCong}`;
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

// lay het phu tung
const getAllPhuTung = async (info) => {
  try {
    const query = `select * from phuTung`;
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

const createPhuTung = async (info) => {
  try {
    const {tenPT, donGia} = info
    const query = `insert into phuTung values (N'${tenPT}','${donGia}')`;
    const data = await connect.query(query);
    return {
      code: "200",
      data
    };
  } catch (error) {
    return {
      code: "400",
      error: error.originalError.info.message,
    };
  }
};

const updatePhuTung = async (info) => {
  try {
    const query = `update phuTung set dongia = ${info.donGia} where maPT = ${info.maPT}`;
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

const deletePhuTung = async (info) => {
  try {
    const query = `delete from phuTung where maPT = ${info.maPhuTung}`;
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
  createSuaChuaCar,
  getAllTienCong,
  updateTienCong,
  deleteTienCong,
  getAllPhuTung,
  updatePhuTung,
  deletePhuTung,
  createPhuTung,
  createTienCong
};
