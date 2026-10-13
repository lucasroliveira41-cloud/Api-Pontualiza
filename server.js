
import express from 'express'

const app = express()

app.get('/usuarios', (req, res) => {
    res.send('ok, deu bom')
})

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})
/*
para criar uma rota 
1) tipo de rota / método http get, put, delet etc...
2) Endereço ('/usuario')
*/
