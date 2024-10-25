// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
//     // ctrl + d duplicates
    
// }


// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop: ${i}`);
//     for (let k = 0; k < 10; k++) {
//         console.log(`inner loop ${k}`);
        
//     }
// }

// let arr = ["flash", "batman", "superman"]

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
    
//     console.log(element);
    
// }


// break and continue

// for (let index = 1; index <20; index++) {
//     // const element = array[index];
//     console.log(`value of i is ${index}`)
//     if (index == 5){
//         console.log("detected 5");
//         break              
//     }
// }
for (let index = 1; index <20; index++) {
    // const element = array[index];
    if (index == 5){
        console.log("detected 5");
        continue          
    }
    console.log(`value of i is ${index}`)
}