import express, { Router } from 'express'
import fs from 'fs'

const app = express()
const PORT = 80

fs.readdirSync("./src/routes").filter(file => file.endsWith(".ts")).forEach(async file => {

    const fileName = file.replace('.ts', '')
    const fileRouter: Router = (await import (`./routes/${fileName}`)).default
    app.use(`/${fileName}`, fileRouter)
    
    console.log(`Rota ${fileName} criada.`)

})

app.get('/', (req, res) => {
    res.send('aoba')
})

app.listen(PORT, () => {
    console.log(`Servidor aberto na porta ${PORT} ⚡️⚡️⚡️`)
})