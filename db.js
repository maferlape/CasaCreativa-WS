const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function(){

    // Crear la tabla
    // crea una tabla llamada ideas

    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );   
        
    `) 

    // Ingresar datos en la tabla

    // const query = `
    // INSERT INTO ideas(
    //     image,
    //     title,
    //     category,
    //     description,
    //     link
    // ) VALUES(?,?,?,?,?); 
    // `
    // const values = [
    //     "https://image.flaticon.com/icons/svg/2729/2729032.svg",
    //     "Kareoke",
    //     "Diversión en Família",
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     "https://rocketseat.com.br"
    // ]

    // db.run(query, values, function(err) {
    //     if (err) return console.log(err)

    //     console.log(this)
    // })

    //eliminar datos de la tabla

    // db.run(`DELETE FROM ideas WHERE id=?`, [3], function(err){
    //     if(err) return console.log(err)

    //     console.log("DELETEI", this)
    // })


    //Consultar datos en la tabla

    // db.all(`SELECT * FROM ideas`, function(err, rows){
    //     if (err) return console.log(err)

    //     console.log(rows)
    // })

})

module.exports = db

