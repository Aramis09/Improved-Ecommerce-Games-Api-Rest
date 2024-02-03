const { Product } = require("../../../db")
const { arrayIncludes } = require("../helpers/consts")
const { buildObjetOrder,buildObjetWhere } = require("../helpers/helperCrudGames")
//! orderAlphabetical just can be "ASC" or "DESC"
//! orderRating just can be "ASC" or "DESC"
//! filterPrice just can be minPriceLmaxPrice  80L110 it's  mandatory the word "L" in the middle values 

module.exports = async (req, res) => {
  const { pageNumber = 1, quantityResult = 9, orderAlphabetical = "nothing", orderRating = "nothing", filterPrice = "nothing",filterGenre = "nothing"} = req.query;
  
  const where = buildObjetWhere({ filterPrice , filterGenre })
  const order = buildObjetOrder({ orderAlphabetical,orderRating })
  const offset = (pageNumber - 1) * quantityResult;
  const productsFound = await Product.findAll({
    include:arrayIncludes,
    offset,
    limit:quantityResult,
    where,
    order
  })
  res.status(200).json({
    pageNumber,
    data: await productsFound
  })
}