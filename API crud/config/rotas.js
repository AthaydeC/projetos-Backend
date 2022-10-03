const express = require('express')
const rotas = express.Router()

let db = [
    {'1': {Nome: 'LULA', Numero: '13'}},
    {'2': {Nome: 'BOLSANU', Numero: '22'}},
    {'3': {Nome: 'CIRO', Numero: '12'}}
]

// Buscar dados
rotas.get('/', (req, res) => {
    return res.json(db)

})
// Inserir dados
rotas.post('/add',(req, res) =>{
    const body = req.body

    if(!body)
        return res.status(400).end()
   
    db.push(body)
    return res.json(body)
})

rotas.delete('/:id', (req, res) =>{
    const id = req.params.id

    let newDB = db.filter(item =>{
        if(!item[id])
            return item
    })

    db = newDB
    return res.send(newDB)

} ) 


module.exports = rotas

