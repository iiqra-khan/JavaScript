const myNum =  [1, 2, 3]

// total = myNum.reduce( function(acc, curVal) {
//     console.log(`acc: ${acc} and curval : ${curVal}`);
    
//     return acc + curVal
// }, 0)

total = myNum.reduce( (acc, curVal) => {
    // console.log(`acc: ${acc} and curVal: ${curVal}`);
    
    return (acc + curVal)
})
// console.log(total);


const shopCart = [
    {
        itemName: "py course", 
        price: 10000
    },
    {
        itemName: "js course", 
        price: 20000
    },
    {
        itemName: "ds course", 
        price: 46999
    }
]

const priceToPay = shopCart.reduce( (acc, item) => (acc + item.price), 0)

console.log(priceToPay);

