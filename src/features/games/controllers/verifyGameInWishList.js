const { WishlistProduct } = require("../../../db")
//!esta para el orto esto
module.exports = async (req, res) => {
  const { idGame,idUser } = req.query;
  if(!idUser) {
    return res.status(200).json({
      data:"tirar error"
    })
  }
  const gameFound = await WishlistProduct.findAll({
    where:{
      UserId:idUser,
      ProductId:idGame
    }
   })
   console.log(gameFound);
  if(!gameFound[0]){
    return res.status(200).json({
      data:false
    })
  } 
  return res.status(200).json({
    data:true
  })
}

