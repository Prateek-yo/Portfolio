const n=2
const s= new Promise((resolve, reject) => {
    if(n%2==0){
        resolve("Solved")
    }else{
        reject('err')
    }
})
console.log(s)