let express=require('express')
let app=express()
let instructorArray=['chris','max','connor']

app.get('/',(req, res)=>{
    res.end('Welcome to my node + express server')
});
app.get('/userName',(req, res)=>{
    res.end('My name is chris')
});
app.get('/students',(req, res)=>{
    res.end(`here are all the${instructorArray.id}`)
});
app.get('/student/:id',(req, res)=>{
    res.end(`${req.params.id}`)
});




app.listen(8888,'localhost',()=>{
    console.log('Listening on port 8888 hostname')
});