const { Router } = require("express")
const routerShoppingCart = Router()
const { getShoppingCart,addGameShoppingCart,deleteGameShoppingCart,addShoppingCartGuest } = require("../controllers/index")

routerShoppingCart.get("/:idUser",getShoppingCart)
routerShoppingCart.post("/add",addGameShoppingCart)
routerShoppingCart.post("/add/guest",addShoppingCartGuest)
routerShoppingCart.delete("/delete",deleteGameShoppingCart)



module.exports = routerShoppingCart