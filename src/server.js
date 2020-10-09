// Servidor
const express =  require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//configurar nunjucks (Template Engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

//configurar arquivos staticos
server.use(express.static("public"))
// receber os dados do req.body
.use(express.urlencoded({ extended:true }))

//rotas
.get("/", pageLanding) 
.get("/study", pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes", saveClasses)

//start do servidor
.listen(3000)
