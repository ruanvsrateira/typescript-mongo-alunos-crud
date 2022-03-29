import app from './app';
import connectToDatabaseService from './services/connectToDatabaseService';

connectToDatabaseService();

app.on("database_on", () => {
  console.log('Conectado ao mongoDB')
  app.listen(3333, () => console.log("Servidor rodando !"))
});