const mongoose = require('mongoose');

mongoose.connect(
  `mongodb+srv://root:RamonDesWeb@cluster0.ur9kgvr.mongodb.net/db-movies?retryWrites=true&w=majority`
  )
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));
  
module.exports = mongoose;