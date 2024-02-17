const { Router } = require("express")
const { getFriendsAccepted,getRequestPending,createUser,addFriend,deleteFriend,acceptFriend } = require("../controllers/index")

const routerUser = Router();

routerUser.get("/requestPending",getRequestPending)
routerUser.get("/friendList",getFriendsAccepted)

routerUser.post("/create",createUser)
routerUser.post("/addFriend",addFriend)
routerUser.delete("/deleteFriend",deleteFriend)
routerUser.put("/acceptFriend",acceptFriend)



module.exports = routerUser