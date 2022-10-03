const express = require('express');
const cors = require('cors');
const bodyparse = require('body-parser');
const morgan = require('morgan');
const rotas = require('./config/rotas')
/*const { use } = require('express/lib/application');*/

const app = express()

app.use(morgan('dev'))
app.use(bodyparse.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(rotas)


app.listen(21262, () =>{
    console.log(`Express started at http://localhost:21262`)
})