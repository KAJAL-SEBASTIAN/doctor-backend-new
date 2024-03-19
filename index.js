const jsonServer= require('json-server')
const cors = require('cors');

const drServer = jsonServer.create()


const router = jsonServer.router('db.json')

const middleware =jsonServer.defaults()

const port = 3001

drServer.use(middleware)
drServer.use(router)

drServer.listen(port,() =>{
    console.log('Rest server listening on port' +port);
})