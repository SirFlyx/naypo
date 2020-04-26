const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('banco.json')
const db = low(adapter)

//criar
db.set('servidor1', [])

//postar
db.get('servidor1').push({
    id: "0000000",
    nick: "pedro",
    avatar: "link.com/avatar.png"
}).write()

//editar
db.get('servidor1').find({id: "1111111"}).assign({nick: "paulo novo"})

//buscar
let valor = db.get('servidor1').find({id: "1111111"}).value()

//apagar
db.get('servidor1').remove({id: "1111111"})