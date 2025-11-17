const http =require("http")
const server = http.createServer((req,res)=>{
    if(req.url==="/hello"){
        res.statusCode=200
        res.end("Hello from the server")
    }
})
server.listen(3000,(err)=>{
    if(err){

    }
    console.log("Server is live")
})