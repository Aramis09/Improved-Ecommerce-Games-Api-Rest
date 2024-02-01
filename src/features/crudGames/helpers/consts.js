const { Platform, Image, Genre, Store} = require("../../../db");
const arrayIncludes = [
    {
        model: Image,
        attributes: ["image_path"],
    },
    {
        model: Platform,
        attributes: ["name"],
        through: { attributes: [] },
    },
    {
        model: Genre,
        attributes: ["name"],
        through: { attributes: [] },
    },
    {
        model: Store,
        attributes: ["name"],
        through: { attributes: [] },
    },
]
const options ={
    include:arrayIncludes
};



module.exports = { options,arrayIncludes };