/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve,reject)=>{
        if(n<0){
            reject(new Error('Time must not be negative'));
        }else {
            setTimeout(() =>{
                resolve();
            }, n * 1000);
        }
    });
}

var seconds = 3;
wait(seconds)
    .then(() => {
        console.log("Function Resolved after " + seconds + " seconds.");
})
    .catch((error) => {
        console.error(error);
    });