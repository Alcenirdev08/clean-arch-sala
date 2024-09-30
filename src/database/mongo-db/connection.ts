//conectar com a string que possui senha e user la no cluster do mongodb


import mongoose from "mongoose"; 

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://cenirdecarvalho:rbaJfbXzsTMgmLQB@cluster0.bnlbq.mongodb.net/')
        console.log('MongoDb conectado com sucesso!') 
        } catch (error) {
        console.log('Erro ao conectar no MongoDb', error)
        
 }

    
}