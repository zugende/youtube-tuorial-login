import express from 'express';
import path from 'path';

const app = express()
const port = 3000

app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.sendFile(path.resolve("seiten/index.html"))
})

app.post('/geheime-seite.html', (req, res) => {
    const benutzername = req.body.benutzername;
    const passwort = req.body.passwort;
    if (benutzername === 'basti' && passwort === 'istcool') {
        res.sendFile(path.resolve("seiten/geheime-seite.html")) 
    } else {
        res.sendFile(path.resolve("seiten/verboten.html"))
    }
})

app.listen(port, () => {
  console.log(`Basti ist cool hoch ${port}`)
})