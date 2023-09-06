"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friends = "usman adnan asif umer waseem salyana faisal zeeshan irfan imran";
var arrayofFriends = friends.split(" ");
var tiTleFriends = "";
for (let i = 0; i < arrayofFriends.length; i++) {
    tiTleFriends += arrayofFriends[i].charAt(0).toUpperCase() + arrayofFriends[i].slice(1).toLowerCase() + " ";
}
console.log(tiTleFriends);
