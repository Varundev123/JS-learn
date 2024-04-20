//Object litral...........
let obj = {
    Usernae : "Varun",
    LoginId : "varun@gmail.com",
    password : "2345",
    alertUser(){
        console.log("Alert Message  =  This is confidential data...Please !! keep safe.....")
    }    
}
obj.alertUser();
console.log(obj);

// make an object by constructive function and 'new' keyword...........
function objmaker(name,Id,passkey){
    this.userName = name
    this.loginId = Id
    this.Password = passkey
    this.userAlert = ()=>{
        console.log("Alert Message  =  This is confidential data...Please !! keep safe.....");
    }
}
objmaker.prototype.PrintMessage = function(){console.log("this is USER cridential");}

let objOne = new objmaker("shanu","shanuji@google.com","2367")
 
 console.log(objOne);
 console.log(typeof objOne);
 objOne.userAlert()
 objOne.PrintMessage();
 //.............................................................................
