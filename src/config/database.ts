import mongoose from 'mongoose';

class Database {
  public async connect():Promise<void>{
    try{
      await mongoose.connect(process.env.MONGODB_URI as string);
      console.log("MOngoDB conectado com sucesso!");
    } catch(error){
      console.log("erro ao conectar ao MongoDB: ", error);
      process.exit();
    }
  }
}

export default new Database();