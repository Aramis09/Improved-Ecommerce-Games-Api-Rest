const { Router } = require("express")
const { createUser,addFriend,deleteFriend,acceptFriend } = require("../controllers/index")

const routerUser = Router();

routerUser.post("/create",createUser)
routerUser.post("/addFriend",addFriend)
routerUser.delete("/deleteFriend",deleteFriend)
routerUser.put("/acceptFriend",acceptFriend)



module.exports = routerUser