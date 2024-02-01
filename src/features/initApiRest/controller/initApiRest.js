const loadProductsInDB = require("../helper/loadDataInsideDb")

const initApiRestController = async (req, res) => {
    await loadProductsInDB();
    console.log("Data loaded");
    res.status(200).json({
      msg:"data load"
    })
}

module.exports = {
  initApiRestController
}