//const matematica = require ('./matematica')
// matematica.somar(8,3)
  const express = require ('express')
  const app = express ()
  const porta =3000

  app.get('/',(req,res)=>{
    res.send ('Olá Ane')
  })

  app.listen (port,()=>{
    console.log (`App rodando na porta ${port}`)

  })
  