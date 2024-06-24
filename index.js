function receivesAFunction(callback) {
    let spy = "we'll see"
    return callback(spy);

}
callback(spy)

function returnsANamedFunction() {
return function maybe() {
    return "Pass the test"
}
}

function returnsAnAnonymousFunction() {
    return function ()
    {
        
    }
}