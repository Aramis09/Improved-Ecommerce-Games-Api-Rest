const { completeApiModified } = require("../helper/helperGetDataFromApi")
const { Image, Product,Genre,Platform,Store }  = require("../../../db")

let arrayPlatforms =[];
let arrayGenres =[];
let arrayStores =[];
let arrayImagesDet =[];
let arrayPlatformsDet =[];
let arrayGenresDet =[];
let arrayStoresDet =[];

async function loadProductsInDB (){
  try {
      const dataOK = await getDataRestProducts();
      await Promise.all(
          dataOK.map(async (element)=>{
              await Product.create(element);
          })
          );
          await Promise.all(
              arrayPlatforms.map(async (element)=>{
                  const arrayProducts = await arrayPlatformsDet.filter(e => e.PlatformId === element.id).map(d => d.ProductId);
                  await createPlatform(element,arrayProducts);
              })
      );
      await Promise.all(
          arrayGenres.map(async (element)=>{
              const arrayProducts = await arrayGenresDet.filter(e => e.GenreId === element.id).map(d => d.ProductId);
              await createGenre(element,arrayProducts);
          })
          );
          await Promise.all(
              arrayStores.map(async (element)=>{
                  const arrayProducts = await arrayStoresDet.filter(e => e.StoreId === element.id).map(d => d.ProductId);
                  await createStore(element,arrayProducts);
              })
              );
              await Promise.all(
                  arrayImagesDet.map(async (element)=>{
                      await Image.create(element);
                  })
                  );
                  
              } catch (error) {
                  console.log(error.message);
              }
}    
async function createPlatform (platform, products)  {
  const newPlatform = await Platform.create(platform);
  await newPlatform.addProduct(products);
  return newPlatform;
}
async function createGenre (genre, products)  {
  const newGenre = await Genre.create(genre);
  await newGenre.addProduct(products);
  return newGenre;
}
async function createStore (store, products) {
  const newStore = await Store.create(store);
  await newStore.addProduct(products);
  return newStore;
}  
async function getDataRestProducts () {
  try {
      let data = await completeApiModified();
      let dataRequerida = await data.map((c) => {
          if (c.platforms.length > 0){
              c.platforms.forEach(element=>{
                  const valueFound = arrayPlatforms.find(e=>e.name===element)
                  if (!valueFound){
                      const newLength = arrayPlatforms.push({id:arrayPlatforms.length+1, name:element});
                      arrayPlatformsDet.push({ProductId:c.id, PlatformId:newLength});
                  }else{
                      arrayPlatformsDet.push({ProductId:c.id, PlatformId:valueFound.id});
                  }
              })
          }
          if (c.genres.length > 0){
              c.genres.forEach(element=>{
                  const valueFound = arrayGenres.find(e=>e.name===element)
                  if (!valueFound){
                      const newLength = arrayGenres.push({id:arrayGenres.length+1, name:element});
                      arrayGenresDet.push({ProductId:c.id, GenreId:newLength});
                  }else{
                      arrayGenresDet.push({ProductId:c.id, GenreId:valueFound.id});
                  }
              })
          }
          if (c.stores.length > 0){
              c.stores.forEach(element=>{
                  const valueFound = arrayStores.find(e=>e.name===element)
                  if (!valueFound){
                      const newLength = arrayStores.push({id:arrayStores.length+1, name:element});
                      arrayStoresDet.push({ProductId:c.id, StoreId:newLength});
                  }else{
                      arrayStoresDet.push({ProductId:c.id, StoreId:valueFound.id});
                  }
              })
          }
          if (c.images.length > 0){
              c.images.forEach(element=>{
                  arrayImagesDet.push({ProductId:c.id, id:arrayImagesDet.length+1, image_path:element});
              })
          }
          let reg = {
              id: c.id,
              name: c.name,
              background_image: c.background_image,
              rating: parseFloat(c.rating),
              playtime: parseInt(c.playtime),
              price: isNaN(parseFloat(c.price)) ? 0.00 : parseFloat(c.price),
              description: c.description,
              released:c.released
          };
          return reg;
      });
      return dataRequerida;
  } catch (error) {
      (error.message);
  }
}

module.exports = loadProductsInDB