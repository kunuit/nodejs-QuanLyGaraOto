const { connect } = require('../connection')

const getAllThamSoMax = async (info) => {
  try {
    var query = `select * from ThamSo`
    const data = await connect.query(query)
    return {
      code: '200',
      data: data.recordset[0]
    }
    
  } catch (error) {
    return {
      code: '400',
      error: error.originalError.info.message
    }
  }
}

const updateThamSoMax = async (info) => {
  try {
    const {tenThamSo, giaTriThamSo} = info
    var query = `update thamso SET GiaTriThamSo = ${giaTriThamSo}
                  Where tenThamSo = '${tenThamSo}'`
    const data = await connect.query(query)
    return {
      code: '200',
      data
    }
  } catch (error) {
    return {
      code: '400',
      error: error.originalError.info.message
    }
  }
}



module.exports = {getAllThamSoMax, updateThamSoMax}