const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('./'))
app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log({...req.query})
    if(!req.query.names) res.render('about') 
    else res.render('parabains', { ...req.query })
})

app.listen(3000, () => console.log('Listening!'))