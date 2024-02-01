const { Router } = require("express");
const { getGamesList } = require("../controllers/index")
const routerGames = Router();
routerGames.get("/list",getGamesList)

module.exports = routerGames