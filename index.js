function  receivesAFunction(callback){
callback();
}

function returnsANamedFunction(){
    return function test(){
    }
}
// returnsANamedFunction() = function test(){console.log(`test function`)}
function returnsAnAnonymousFunction(){
 return function(){
 }
}
//const test1 = function() { console.log(`ding ding ding`)}
