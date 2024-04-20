function one(name){
    this.username = name
    this.alertmsg = function(){
        console.log("this is a user name");
    }
}
function two(naam,email,pass){
this.emailId = email
this.password = pass
one.bind(this,naam)()
//one.call(this,naam)
}
let Info = new two("varun","varun@aple.com","@2345")
console.log(Info);
//....................................................

class user{
    constructor(name,email,passkey){
       this.userName = name
       this.emailId = email
       this.password = passkey
    }
    encryption(){
        console.log(this.password.toUpperCase())
    }
    changeValue(value){
        this.userName = value
        return this
    }
}
let test = new user("tarun","tarun@gmail.com","ae@23")
console.log(test);
test.encryption();
console.log(test.changeValue("Arunji"));
//...........................................

//class inharit..................
class userId{
    constructor(name,nick){
        this.userName = name
        this.nickName = nick
    }
}
class userCred extends userId{
    constructor(nam,nic,email,password){
        super(nam,nic)
        this.emailId = email
        this.passkey = password
    }
}
let testOne = new userCred('varun',"shanu","varunji@google.com","@5653")
console.log(testOne);