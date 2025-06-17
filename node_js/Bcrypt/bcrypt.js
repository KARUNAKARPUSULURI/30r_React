const bcrypt = require("bcrypt");

const password = "Karuna12";
const salt = 10;
//$2b$10$RV.z0nXTM2Zh7zO3yf212.xGnRUn2Tv2SA7IUKzxDx82jgUNL8nKu
//$2b$10$uzqpviw2LMpGud2DBsUSGeApGDsipaS2OmwkXTjWXai.kAYB9fMeC
// console.log(bcrypt.hashSync(password, salt));

const hashedPassword = bcrypt.hashSync(password, salt);

console.log(bcrypt.compareSync(password, "$2b$10$RV.z0nXTM2Zh7zO3yf212.xGnRUn2Tv2SA7IUKzxDx82jgUNL8nKu"));

//wifi 1 -> 1234567 -> $2b$10$uzqpviw2LMpGud2DBsUSGeApGDsipaS2OmwkXTjWXai.kAYB9fMeC
//wifi 2 -> 1234567 -> //$2b$10$RV.z0nXTM2Zh7zO3yf212.xGnRUn2Tv2SA7IUKzxDx82jgUNL8nKu


// console.log(bcrypt.hash());
// //callback -> 
// bcrypt.hash(password, 10, (err, hash)=> {

// })
// //promise -> 
// bcrypt.hash(password, 10).then((err, hash) => console.log(hash));
// //async and await
// const hashedPassword = await bcrypt.hash(password, 10);
// async function hashedPassword1(){
//     await bcrypt.hash(password, 10);
// }




// console.log(bcrypt.hashSync())