const mongoose = require('mongoose');

let movieSchema = new mongoose.Schema({
    titulo: { type: String },
    descripcion: { type: String },
    director: { type: String },
    anio_estreno: { type: Number },
    genero: { type: String},
    idioma: { type: String },
    duracion_minutos: { type: Number },
    calificacion: { type: Number },
});

module.exports = mongoose.model('movie', movieSchema, 'movie');