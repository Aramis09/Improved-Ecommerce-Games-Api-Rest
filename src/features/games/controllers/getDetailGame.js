const { Product } = require("../../../db")
const { arrayIncludes } = require("../helpers/consts")

module.exports = async (req, res) => {
  const { id } = req.params;
  const productFound = await Product.findByPk(id,{
    include:arrayIncludes
  });
  // if(!productFound) throw new Error() 
  return res.status(200).json({
    data: await productFound
  })
}