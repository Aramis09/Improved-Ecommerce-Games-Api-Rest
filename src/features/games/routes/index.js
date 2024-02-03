const { Router } = require("express");
const { verifyGameInWishList,getGamesList, getDetailGames, addGameToWishList,deleteGameFromWishList,getWishList } = require("../../games/controllers/index")
const routerGames = Router();



routerGames.get("/list",getGamesList)
routerGames.get("/verifyGameInWishList",verifyGameInWishList)
routerGames.get("/:id",getDetailGames)
routerGames.get("/wishList/:idUser",getWishList)
routerGames.post("/addWish",addGameToWishList)
routerGames.delete("/deleteWish",deleteGameFromWishList)


deleteGameFromWishList



module.exports = routerGames