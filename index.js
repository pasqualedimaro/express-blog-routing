//faccio un po' di scaffolding, creo il package.json con npm init -y mi installo express, mi creo un file gitignore per escludere dal pubblicare la repo node_modules mi creo anche una repo routes

//inizio a scrivere express
const express = require("express")
const app = express()
const port = 3100

// avvio server di express nella porta che in questo caso è il mio pc
app.listen(port, () => {
    console.log(`Example app listening on port  http://localhost:${port}`)
})

// creo una prima rotta che mi restituisce un semplice testo
app.get("/", (req, res) => (
    res.send("Benvenuti nel mio blog")
))