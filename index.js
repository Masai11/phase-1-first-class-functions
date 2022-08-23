

function receivesAFunction(callback){
    callback();
}


function returnsANamedFunction() {
    const myFunction = function(){
        console.log("Before all");
    }
    return myFunction 
}

function returnsAnAnonymousFunction() {
    return (function () {
        console.log('Before all');
    })
}