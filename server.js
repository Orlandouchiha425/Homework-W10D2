const express=require('express');
 const app= express();

app.get('/',(req,res)=>{
    res.send('<h1>Test Test</h1>')
})

 app.listen(3000,()=>{
     console.log('this part is not necessary but need to make sure it works')
 })

 app.get('/greeting/:name',(req,res)=>{
    //req.params.name
    res.send(`Wow! Hello there, ${req.params.name}`)
})

app.get('/tip/:total/:tipPercentage',(req,res)=>{
res.send(`${req.params.total*req.params.tipPercentage/100}`)

})

// :total:tipPercentage
app.get('/magic/:question',(req,res)=>{
    arr=["It is certain", "It is decidedly so", "Without a doubt",
     "Yes definitely","You may rely on it", "As I see it yes", "Most likely", 
     "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now",
      "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
    
      const random = arr[Math.floor(Math.random()*arr.length)];
    res.send(`${req.params.question} ,<h1>${random}</h1>`)
})
