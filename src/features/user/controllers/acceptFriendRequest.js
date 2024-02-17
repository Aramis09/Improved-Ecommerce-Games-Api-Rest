const { FriendUser } = require("../../../db")

module.exports=  async (req, res) => {
  const { idEmitterRequest,idReceiverRequest } = req.body;
  const request1 = await FriendUser.findAll({
    where: {
      UserId:idEmitterRequest,
      FriendInListId:idReceiverRequest
}
  })
  const request2 = await FriendUser.findAll({
    where: {
      UserId:idReceiverRequest,
      FriendInListId:idEmitterRequest
}
  })
  await request1[0].update({status:"accept"})
  await request2[0].update({status:"accept"})

  return res.status(200).json({
    data:request1[0]
  })
}
