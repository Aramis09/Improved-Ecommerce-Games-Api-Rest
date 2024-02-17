module.exports = {
  createUser: require("../controllers/createUser"),
  addFriend: require("./sendRequestFriend"),
  deleteFriend: require("../controllers/deleteFriend"),
  acceptFriend: require("../controllers/acceptFriendRequest"),
  getRequestPending: require("./getRequestPending"),
  getFriendsAccepted: require("./getFriendsAccepted"),




}