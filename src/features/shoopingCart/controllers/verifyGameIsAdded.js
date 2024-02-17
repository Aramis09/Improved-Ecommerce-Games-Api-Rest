const { ShoppingCart } = require("../../../db")
module.exports = async (req, res) => {
  const { idGame,idUser } = req.query;
  if(!idUser) {
    return res.status(200).json({
      data:"tirar error"
    })
  }
  const gameFound = await ShoppingCart.findAll({
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