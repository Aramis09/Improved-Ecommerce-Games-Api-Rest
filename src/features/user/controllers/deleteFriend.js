const { FriendUser } = require("../../../db")

const createUserController = async (req, res) => {
  const { idEmitterAction,idForDelete } = req.body;
  console.log(req.body);
  await FriendUser.destroy({
    where:{
      UserId:idEmitterAction,
      FriendInListId:idForDelete
    }
  })
  await FriendUser.destroy({
    where:{
      UserId:idForDelete,
      FriendInListId:idEmitterAction
    }
  })
  return res.status(200).json({
    data:"Friend or request was deleted"
  })
}

module.exports = createUserController