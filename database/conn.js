//MONGOOSE DEFAULT CONFIGURATION
const mongoose = require('mongoose');

async function conn(){
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@database-projects---dnc.aqfezbi.mongodb.net/${process.env.NODE_ENV}`);
    console.log('mongodb conectado com sucesso');
  } catch (error) {
    console.log(`erro: ${error}`);
  }
};

module.exports = conn;