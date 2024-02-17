const { User } = require("../../../db")
module.exports = async (req, res) => {
  const { idUser } = req.params;
  const { pageNumber = 1, quantity = 5 } = req.query;

  const offset = (pageNumber - 1) * quantity;
  const user = await User.findByPk(idUser);
  if(!user)  return res.status(200).json({
    data:"Tengo que tirar un error",
  })
  const data = await user.getWishlist({
    offset,
    limit:quantity
  });
  
  return res.status(200).json({
    data:data,
  })
}


