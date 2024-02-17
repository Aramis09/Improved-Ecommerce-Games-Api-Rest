const { User } = require("../../../db")

const sendRequestFriend = async (req, res) => {
  const { idEmitterRequest,emailReceiverRequest } = req.body;
  console.log(req.body);
  const emitter = await User.findByPk(idEmitterRequest)
  const receiver = await User.findAll({
    where:{
      email:emailReceiverRequest
    }
  })

  const result = await emitter.addFriendInList(receiver, {
    through: { model: "FriendUser", status: "pending" },
  })
   await receiver[0].addFriendInList(emitter, {
    through: { model: "FriendUser", status: "pending" },
  })

  return res.status(200).json({
    data:result
  })
}

module.exports = sendRequestFriend