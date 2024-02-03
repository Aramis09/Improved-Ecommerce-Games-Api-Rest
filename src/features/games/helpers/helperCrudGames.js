const {Sequelize} = require("sequelize");


const buildObjetWhere = ({filterPrice ,filterGenre }) => {
  let where = {}
  if(filterGenre !== "nothing" && filterPrice !== undefined){
    where = {...where, genre:{[Sequelize.Op.like]: `%${filterGenre}%`}}
  }
  if(filterPrice !== "nothing" && filterPrice !== undefined ) {
    const priceRange = filterPrice.split("L")
    where = {...where, price: {
      [Sequelize.Op.between]: [priceRange[0], priceRange[1]]
  }}
  }
  return where
}

const buildObjetOrder = ({orderAlphabetical, orderRating}) => {
  let order = []
  if(orderAlphabetical !== "nothing" && orderAlphabetical !== undefined){
    order[0] = ["price",orderAlphabetical]
  }
  if(orderRating !== "nothing" && orderRating !== undefined) {
    order[0] = ["price",orderRating]
  }
}

module.exports  = {
  buildObjetWhere,
  buildObjetOrder
}