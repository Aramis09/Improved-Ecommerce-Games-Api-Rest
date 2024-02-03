
const { User } = require("../../../db")
module.exports = async (req, res) => {
  const { idUser } = req.params;
  const user = await User.findByPk(idUser);
  if(!user)  throw new Error() 
  const data = await user.getShoppingCartAction();
  
  return res.status(200).json({
    data:data,
  })
}

