//usa express para crear y configurar el servidor
const express = require ("express")
const server = express()

const db=require("./db")

// const ideas = [
//     {
//         img:"https://image.flaticon.com/icons/svg/2728/2728995.svg",
//         title:"Cursos de Programacion",
//         category:"Estudio",
//         descripcion:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         url:"https://rocketseat.com.br",
//     },

//     {
//         img:"https://www.flaticon.es/premium-icon/icons/svg/2887/2887812.svg",
//         title:"Ejercicios",
//         category:"Salud",
//         descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         url:"https://rocketseat.com.br",
//     },

//     {
//         img:"https://image.flaticon.com/icons/svg/1754/1754634.svg",
//         title:"Meditación",
//         category:"Mentalidad",
//         descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         url:"https://rocketseat.com.br",
//     },

//     {
//         img:"https://image.flaticon.com/icons/svg/2729/2729032.svg",
//         title:"Kareoke",
//         category:"Diversión en Família",
//         descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         url:"https://rocketseat.com.br",
//     },

//     {
//         img:"https://image.flaticon.com/icons/svg/2833/2833844.svg",
//         title:"Juegos Online",
//         category:"Distracción",
//         descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         url:"https://rocketseat.com.br",
//     },

//     {
//         img:"https://www.flaticon.com/premium-icon/icons/svg/1630/1630646.svg",
//         title:"Recetas de cocina",
//         category:"Aprender nuevas Recetas",
//         descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         url:"https://rocketseat.com.br",
//     }
// ]

//configuracion de archivos estaticos (css, src, imagenes)
server.use(express.static("public"))

//configuracion del nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache:true,//boolean, desabilita el cache, para que cuando actualice mi styles.css realice todos los cambios
})
//Habilitar uso de req.body
server.use(express.urlencoded({ extended:true }))

//crea una ruta
//recibe el pedido del cliente para responder
//los archivos no necesitan barra porque la carpeta 
//ya esta redirecionada ojo_(views)
server.get("/", function(req, res){

    db.all(`SELECT * FROM ideas`, function(err, rows){
        
        if (err){
            console.log(err)
            return res.send("Error en la base de datos!")
        }

        const reverseIdeas = [...rows].reverse() //estamos colocando el vertor idea en una nueva caja

        let lastIdeas = []

        //for para  tomar solo dos ideas del vectoos ideas
        for (let idea of reverseIdeas){//el reverse me ordena ideas desde la ultima a la primera
            if(lastIdeas.length<2){
                lastIdeas.push(idea)//push adiciona una nueva idea(nueva pocisión)
            }
        }

        return res.render("index.html", { ideas:lastIdeas})// pasando ideas como parametro para index
    })


})


server.get("/idea", function(req, res){

    db.all(`SELECT * FROM ideas`, function(err, rows){

        if (err){
            console.log(err)
            return res.send("Error en la base de datos!")
        } 

        const reverseIdeas = [...rows].reverse()
        return res.render("idea.html", {ideas:reverseIdeas})
    })

})

server.post("/", function(req, res){
    // Ingresar datos en la tabla
    const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES(?,?,?,?,?); 
    `
    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link,
    ]

    db.run(query, values, function(err) {
        if (err){
            console.log(err)
            return res.send("Error en la base de datos!")
        }

        return res.redirect("/idea")
    })

})

server.post("/idea", function(req, res){
    // Ingresar datos en la tabla
    const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES(?,?,?,?,?); 
    `
    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link,
    ]

    db.run(query, values, function(err) {
        if (err){
            console.log(err)
            return res.send("Error en la base de datos!")
        }

        return res.redirect("/")
    })


})

server.listen(3000, function(){
    console.log("Server is Running")
})

