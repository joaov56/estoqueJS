const cors= require('cors')
const express = require('express');

const app= express();

app.use(express.json());
app.use(cors());

const produtos = []

app.post('/ok', (req, res)=>{
    const produto= req.body.produto
    const quantidade= req.body.quantidade;
    const fornecedor = req.body.fornecedor;
    const id= Math.floor(Math.random()*100)

    produtos.push(produto,quantidade)
    console.log(produtos);
    
   
    
    
        
})

app.get('/', (req, res)=>{
    return res.send(username)
})



app.listen(3000, ()=>{
    console.log('iniciei na porta 3000');
    
})


