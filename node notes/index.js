const fs = require("fs")
try{
    const data =fs.readFileSync('./example.text','utf-8')
    console.log(data)
}
catch(err){
    console.log("err", err)
}