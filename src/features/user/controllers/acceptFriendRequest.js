const { FriendUser } = require("../../../db")

const acceptFriendRequst = async (req, res) => {
  const { idEmitterAction,idForDelete } = req.body;
  const request = await FriendUser.findAll({
    UserId:idEmitterAction,
    idReceiverRequest:idForDelete
  })
  await request[0].update({accept:"accept"})
  return res.status(200).json({
    data:request
  })
}

module.exports = acceptFriendRequst