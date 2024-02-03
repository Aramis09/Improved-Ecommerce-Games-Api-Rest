const { User } = require("../../../db")
module.exports = async (req, res) => {
  const { idUser } = req.params;
  const user = await User.findByPk(idUser);
  if(!user)   return res.status(200).json({
    data:"Tengo que tirar un error",
  })
  const data = await user.getWishlist();
  
  return res.status(200).json({
    data:data,
  })
}


