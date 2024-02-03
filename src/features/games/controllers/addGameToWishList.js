const { Product,User } = require("../../../db")

module.exports = async (req, res) => {
  const { idGame,idUser } = req.body;
  console.log(req.body,"<<<<-----------");
  const productForAdd = await Product.findByPk(idGame)
  const user = await User.findByPk(idUser)
  if(!user) return res.status(200).json({
    data:"tirar error"
  })
  const data = await user.addWishlist(productForAdd,{
    through: { model: "WishlistProduct" },
  })

  return res.status(200).json({
    data
  })
}