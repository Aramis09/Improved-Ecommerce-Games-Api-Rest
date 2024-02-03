const { WishlistProduct } = require("../../../db")

module.exports = async (req, res) => {
  const { idGame,idUser } = req.body;
  
   await WishlistProduct.destroy({
    where: {
      UserId:idUser,
      ProductId:idGame
    }
  })


  return res.status(200).json({
    data:"Game was delete from wish list"
  })
}