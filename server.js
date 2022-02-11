const express=require('express');
 const app= express();

app.get('/',(req,res)=>{
    res.send('<h1>Test Test</h1>')
})

 app.listen(3000,()=>{
     console.log('this part is not necessary but need to make sure it works')
 })

 app.get('/greeting:name',(req,res)=>{
    //req.params.name
    res.send(`Wow! Hello there, ${req.params.name}`)
})


