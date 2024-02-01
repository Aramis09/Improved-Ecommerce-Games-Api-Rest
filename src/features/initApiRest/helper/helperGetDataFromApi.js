const { addAllProperties } = require('./addProperties');
require("dotenv").config(); //**La variables de entorno quedan dispobnibles .env */
const axios = require("axios");

const formatedApiGamesPage= async (pageNumber) =>{
    const responseApi = await axios.get(`https://api.rawg.io/api/games?key=${process.env.KEY_GET_GAMES_EXTERNAL_SERVICE}&page=${pageNumber}`);
    const games =  await responseApi.data;
    let clearGames = [];
    games.results.forEach(game => {
        const {id,name,released,background_image,rating,playtime,platforms,genres,stores,short_screenshots} = game;
        const gameFilteredWithoutPrice = {id,name,released,background_image,rating,playtime,platforms,genres,stores,short_screenshots};
        const gameCompleteProperties = addAllProperties(gameFilteredWithoutPrice); 
        clearGames.push(gameCompleteProperties);
    });
    return clearGames;
};

let clearArray = []; 

const completeApiModified = async () => {
    if(!clearArray.length){
        let pagesModified = [];        
        for (let pageNumber = 1; pageNumber < 9 ; pageNumber++) {
           const modifiedPages = await formatedApiGamesPage(pageNumber);
           pagesModified =  [...pagesModified,...modifiedPages];
        }
        clearArray = pagesModified.filter(game => {
            if(game.price) return game;
        });
        console.log(clearArray.length);
        return clearArray;
    }
    return clearArray;
};




module.exports = {
    completeApiModified
}