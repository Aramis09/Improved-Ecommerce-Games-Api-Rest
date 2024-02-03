const { User } = require("../../../db")

const sendRequestFriend = async (req, res) => {
  const { idEmitterRequest,idReceiverRequest } = req.body;

  const emitter = await User.findByPk(idEmitterRequest)
  const receiver = await User.findByPk(idReceiverRequest)

  const result = await emitter.addFriendInList(receiver, {
    through: { model: "FriendUser", accept: "pending" },
  })

  return res.status(200).json({
    data:result
  })
}

module.exports = sendRequestFriend