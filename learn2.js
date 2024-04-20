let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
//heroPower.heyHitesh()
//..............................................

String.prototype.trueLength = function(){
    console.log(`the true length is :: ${this.trim().length}`)
    return this.trim()
}
let name = "varun           "
console.log(name.length)
console.log(name.trueLength());
//..................................................

function objmakers(name,Id,passkey){
    this.userName = name
    this.loginId = Id
    this.Password = passkey
}
objmakers.prototype.alertmsg = function(){
    console.log("Alert Message  =  This is confidential data...Please !! keep safe.....");
}
let objOne1 = new objmakers("shanu","shanuji@google.com","2367")
console.log(objOne1.alertmsg());