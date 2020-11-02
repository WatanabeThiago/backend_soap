import express from 'express'
import './database/connect'
import routes from './routes'
const app =express()
import "reflect-metadata"


app.use(express.json())
app.use(routes)

app.listen(3000, ( ) => console.log('🔥 Servidor iniciado na porta 3000'))