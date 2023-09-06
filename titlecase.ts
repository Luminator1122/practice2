var friends:string="usman adnan asif umer waseem salyana faisal zeeshan irfan imran"
var arrayofFriends:string[]=friends.split(" ")
var tiTleFriends:string=""
for (let i = 0; i < arrayofFriends.length; i++) 
{
tiTleFriends+=arrayofFriends[i].charAt(0).toUpperCase()+arrayofFriends[i].slice(1).toLowerCase()+" ";
    
}
console.log(tiTleFriends)

export {};