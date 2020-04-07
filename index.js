let express=require('express')
let app=express()
let instructorArray=['chris','max','connor'] // this should be an array of objects

app.get('/',(req, res)=>{
    res.end('Welcome to my node + express server')
});
// this path should be called 'displayName' 
app.get('/userName',(req, res)=>{
    // you should be displaying a variable
    res.end('My name is chris')
});
// this path should be called 'allStudents'
app.get('/students',(req, res)=>{
    // you should be iterating to display each student 
    res.end(`here are all the${instructorArray.id}`) // there is no id property?
});
// looks like you were just testing out this route (a comment would help me understand what's going on)
app.get('/student/:id',(req, res)=>{
    res.end(`${req.params.id}`)
});




app.listen(8888,'localhost',()=>{
    console.log('Listening on port 8888 hostname')
});