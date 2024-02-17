const { Router } = require("express");
const { initApiRestController } = require("../features/initApiRest/controller/initApiRest");
const routerGames = require("../features/games/routes/index");
const routerUser = require("../features/user/routes/index");
const routerMercadoPago = require("../features/mercadoPago/routes/index");
const routerShoppingCart = require("../features/shoopingCart/routes/index");




const mainRouter = Router();
mainRouter.get("/initApiRest",initApiRestController)
mainRouter.use("/games",routerGames)
mainRouter.use("/mercadoPago",routerMercadoPago)
mainRouter.use("/user",routerUser)
mainRouter.use("/shoppingCart",routerShoppingCart)






module.exports = mainRouter; 