const { ShoppingCart } = require("../../../db")

module.exports = async (req, res) => {
  const { idGame,idUser } = req.body
     await ShoppingCart.destroy({
      where:{
        UserId:idUser,
        ProductId:idGame
      }
  })
  return res.status(200).json({
    data:"game was deleted from shopping cart"
  })
}
