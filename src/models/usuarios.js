const mongoose = require('mongoose');
//const MONGO_URI  = "mongodb+srv://chat:chat@cluster0.ky0aqm9.mongodb.net/prueba?retryWrites=true&w=majority"
const {MONGO_URI} = require('../config/config')
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }, () => console.log('Connected'))

const usuariosCollection = 'usuarios';

const UsuarioSchema = new mongoose.Schema({
    firstName: {type: String, required: true, max: 100},
    lastName: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    username: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100}
})

module.exports = mongoose.model(usuariosCollection, UsuarioSchema)