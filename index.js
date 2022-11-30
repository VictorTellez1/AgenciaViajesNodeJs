
import express from 'express'
import router from './routes/index.js';
import db from './config/db.js'
import dotenv from 'dotenv'
const app=express();

dotenv.config()

//Conectar la base de datos

db.authenticate()
    .then(()=>{
        console.log("Base de datos conectada")
    })
    .catch(error=>console.log(error))

//Definir puerto
const port=process.env.PORT || 4000 //Lee el puerto donde se ejecuta el servidor y sino existe que tome el puerto 4000

//Habilitar PUG
app.set('view engine','pug')

//Agregar body parser para leer datos de un formulario
app.use(express.urlencoded({extended:true}))


//Midleware Obtener el año actual
app.use((req,res,next)=>{
    const year=new Date()
    res.locals.ActualYear=year.getFullYear()
    res.locals.nombresitio="Agencia de viajes"
    next()
})

//Definir la carpeta publica 
app.use(express.static('public'))

//Agregar router
app.use('/',router) //El app.use utiliza todos los verbos html

app.listen(port,()=>{ //Escucha por el puerto donde se monta el servidor
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})