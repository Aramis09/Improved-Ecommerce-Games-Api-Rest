const { User,FriendUser } = require("../../../db")

//!es mejorable, proba reduciendo instancias de user y friend
const removeOrRejectedFriend = async (idEmitterAction, idToDelete, response) => {
  try {
    if (response === "remove") {
      const user = await User.findByPk(idEmitterAction);
      const friend = await User.findByPk(idToDelete);
      await user.removeFriendInList(friend, {
        // especificar la tabla intermedia a utilizar
        through: FriendUser,
      });
      await friend.removeFriendInList(user, {
        // especificar la tabla intermedia a utilizar
        through: FriendUser,
      });
      return "all ok";
    }
    if (response === "rejected") {
      const user = await User.findByPk(idEmitterAction);
      const friend = await User.findByPk(idToDelete);
      await user.removeFriendInList(friend, {
        // especificar la tabla intermedia a utilizar
        through: { model: FriendUser, where: { accept: "pending" } },
      });
      await friend.removeFriendInList(user, {
        // especificar la tabla intermedia a utilizar
        through: { model: FriendUser, where: { accept: "pending" } },
      });
      return "all ok";
    }
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  removeOrRejectedFriend
}


//!!!!!otra forma, creo que mas eficiente :

// try {
//   // Primero, encontrar la entrada en la tabla WishlistProduct que corresponda al usuario y al producto
//   const wishlistEntry = await WishlistProduct.findOne({
//       where: {
//           UserId: 3, // ID del usuario
//           ProductId: 9, // ID del producto
//       }
//   });

//   if (wishlistEntry) {
//       // Si se encuentra la entrada, actualizar el atributo "accept"
//       await wishlistEntry.update({ accept: 'nuevo_valor' }); // Cambia 'nuevo_valor' por el nuevo valor que desees asignar
//       console.log('El atributo "accept" se ha actualizado correctamente.');
//   } else {
//       console.log('No se encontró ninguna entrada en la tabla WishlistProduct para el usuario y el producto especificados.');
//   }
// } catch (error) {
//   console.error('Error al actualizar el atributo "accept":', error);
// }