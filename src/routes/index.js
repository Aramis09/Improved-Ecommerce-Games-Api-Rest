const { Router } = require("express");
const { initApiRestController } = require("../features/initApiRest/controller/initApiRest");
const routerGames = require("../features/crudGames/routes/index");


const mainRouter = Router();
mainRouter.get("/initApiRest",initApiRestController)
mainRouter.use("/games",routerGames)




module.exports = mainRouter; 