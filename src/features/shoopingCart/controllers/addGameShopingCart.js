const { User,Product } = require("../../../db")

module.exports = async (req, res) => {
  const { idGame,idUser } = req.body

  const user = await User.findByPk(idUser)
  const game = await Product.findByPk(idGame)

  const data = await user.addShoppingCartAction(game,{
    through: { model: "ShoppingCart" },
  })
  return res.status(200).json({
    data
  })
}