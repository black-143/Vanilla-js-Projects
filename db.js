let db;
// open database
//Create ObjectStore 
//Mongodb->collections
//Make transactions
let openRequest = indexedDB.open("myDatabase")
openRequest.addEventListener("success",(e)=>{
    console.log("db success ")
    db=openRequest.result

})
openRequest.addEventListener("error",(e)=>{
console.log("db error")
})
openRequest.addEventListener("upgradeneeded",(e)=>{
    console.log("db upgrade and also for initial DB creatio")
    db=openRequest.result;

    console.log(db)

    db.createObjectStore("video",{keyPath :"id"});
    db.createObjectStore("image",{keyPath:"id"});


})
