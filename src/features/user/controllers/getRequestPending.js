const {  User } = require("../../../db");


module.exports = async (req, res) => {
  const { idUser } = req.query;

  const users = await User.findAll({
    include: [{
      model: User,
      as: 'FriendInList',
      through: {
        where: { status: 'pending' }
      },
    }],
    where: { id: idUser }
  });
  return res.status(200).json({
    data:users[0]["FriendInList"]
  })
}
