let myFavNum: any = 5;
myFavNum = 'vivor'
myFavNum=true;


let num: unknown;
num = 5
num = "vivor"
num = true

if(typeof num === "number"){
    console.log(num + 5)
}else if(typeof num === "boolean"){
    console.log(num)
}