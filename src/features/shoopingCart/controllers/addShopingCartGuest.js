const { ShoppingCart } = require("../../../db")


module.exports = async (req, res) => {
  const { arrayOfId,idUser } = req.body
  console.log(arrayOfId);
  const arrBulkCreate =  arrayOfId.map(idGame => ({
    ProductId:idGame,
    UserId:idUser
  }))

  const data = await ShoppingCart.bulkCreate(arrBulkCreate)
  res.status(200).json({
    data
  })
}