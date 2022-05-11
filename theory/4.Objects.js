// object
const player = {
    name:"siwon",
    points:10,
    fat:false,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

// 객체 내의 값 변경
player.fat = true;
player.points = player.points+15;
console.log(player);

// 객체 내 새롭게 추가
player.lastname = "potato";
console.log(player);