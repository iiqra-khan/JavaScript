const myobj = {
    js :  "javascript", 
    cpp : "C++"
}

// for(const key in myobj) {
//     console.log(`${key} sortcut is for ${myobj[key]}`);    
// }

const programming = ['js', 'rb', 'py']

for (const key in programming) {
    // console.log(key); print 0, 1 ...
    console.log(programming[key]);
}

const map = new Map()
map.set("IN", "India")
map.set("fr", "France")

// for(const key in map){
//     console.log(key);
    
// }

// --- MAPS ARE NOT ITERABLE---- 