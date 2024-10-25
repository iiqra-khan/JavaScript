//  Immediatly Invoked Funciton Expressions (IIFE)
    // -- immediate execution of a function such as for a file which only does connectivity to DB must execute immediatly
    // -- global scope pollution to be avoided we create a scope

(function connect(){
        console.log('db connected');

        
})();
// () first paranthesis func def () execution call
// connect()
( function connect_two() {   //named iife
    console.log('db connected two');
    
}) () // this raises an error when we do not put ;

( () => {
    console.log('db connected two');
    
}) () // also works as above
( (name) => {
    console.log(`db connected two ${name}`);
}) ("iqra") 
// two iify together can be written by being separated with a semi colon
