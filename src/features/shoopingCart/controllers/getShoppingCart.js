
const { User } = require("../../../db")
module.exports = async (req, res) => {
  const { idUser } = req.params;
  if(!idUser)   return res.status(200).json({
    data:undefined,
  })
  const user = await User.findByPk(idUser);
  if(!user)  return res.status(200).json({
    data:undefined,
  })
  const data = await user.getShoppingCartAction();
  
  return res.status(200).json({
    data:data,
  })
}

