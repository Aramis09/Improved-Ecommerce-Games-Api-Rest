const { User } = require("../../../db")

const createUserController = async (req, res) => {
  const { id,name,image,email } = req.body;
  const dataUser = { id, name,image,email,admin:false,blocked:false, } 
  const isUserExist = await User.findByPk(String(id));
  if(isUserExist) return res.status(200).json({
    data:"user already exist"
  })

  const newUser = await User.create(dataUser);
  return res.status(200).json({
    data:newUser
  })
}

module.exports = createUserController