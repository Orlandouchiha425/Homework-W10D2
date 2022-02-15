const express=require('express');
const app=express();
//I created a start script for nodemon thanks to Josh.
app.get('/',(req,res)=>{
    res.send(`<h1> 99 Bottles of Beer on the wall</h1><a href="/98">take one down, pass it around</a>`)

})

      

app.get('/:number_of_bottles', (req, res) => { 
    const number=parseInt(req.params.number_of_bottles) 
    if (req.params.number_of_bottles === "0") {

        res.send(`
            <p>no more bottles</p>
        `)
    } else {
        res.send(`
        <a href="/${number -1}"> take one down, pass it around</a>
        <p>${number} Bottles of beer on the wall.</p>
            
        `)
    }
})



app.listen(3000)
