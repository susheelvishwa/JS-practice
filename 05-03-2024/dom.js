// console.log("jankit");

// scope is three type

// 1st one is globle scope
// 2nd functinal scope
// block scope

// globle variable
let name = "jankit"
eting();
function eting() {
    let subname = "susheel"
    console.log(subname);
    console.log(name);
    {
        function block() {
            let block = "pillu"
        }
        console.log(name);
        console.log(block);
    }
    console.log(subname);
}
console.log(name);
// console.log(subname);