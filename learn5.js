//lexical scoping..................
function userName(){
    let name = "varun"
    function print(){
        console.log(`${name}`);
    }
    print()
}
userName();
//......................................................
//Closure..................
function setName(){
    let user = "chrome"
    function getName(){
        console.log(`the browser name is ${user}`);
    }
    return getName
}
let browser = setName()
browser()
//................................................................