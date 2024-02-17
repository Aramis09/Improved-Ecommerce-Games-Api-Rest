const { Router } = require("express")
const { createPayment } = require("../controllers/controllers")

const routerMeli = Router()

routerMeli.post("/createPayment",createPayment )

module.exports = routerMeli