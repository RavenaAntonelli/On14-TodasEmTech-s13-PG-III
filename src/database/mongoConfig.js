const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://apimusica:031188rm@cluster0.f9rmy.mongodb.net/Filmes?retryWrites=true&w=majority"

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco conectado (:")
    } catch (error) {
        console.log("Erro: ", error.message)
    }
}

module.exports = {
    connect
}