const movie = require('../models/movie.model');

// Consultar todos los movies
exports.getmovies = async (req, res) => {
    try {
        const movies = await movie.find();
        return res.status(200).json(
            {
                message: 'movies obtenidos con éxito',
                data: movies
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al consultar movies',
                data: error
            }
        );
    }
};

// Consultar movie por id
exports.getmovieById = async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const movie = await movie.findById(movieId);
        return res.status(200).json(
            {
                message: 'movie obtenido con éxito',
                data: movie
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al consultar movie',
                data: error
            }
        );
    }
};

// Crear movie
exports.newmovie = async (req, res) => {
    try {
        const { titulo, descripcion, director, anio_estreno, genero, idioma, duracion_minutos, calificacion } = req.body;
        const newMovie = new movie({ titulo, descripcion, director, anio_estreno, genero, idioma, duracion_minutos, calificacion });
        await newMovie.save();

        return res.status(200).json(
            {
                message: 'Película creada con éxito',
                data: newMovie
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al crear película',
                data: error
            }
        );
    }
};


// Actualizar movie
exports.updatemovie = async (req, res) => {
    const movieId = req.params.movieId;
    const newData = req.body;
    try {
        const updatedmovie = await movie.findByIdAndUpdate(movieId, newData, { new: true });
        return res.status(201).json(
            {
                message: 'Actualizar movie por ID',
                data: updatedmovie
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al actualizar movie',
                data: error
            }
        );
    }
};

// Eliminar movie
exports.deletemovie = async (req, res) => {
    const movieId = req.params.movieId;
    try {
        await movie.findByIdAndDelete(movieId);
        return res.status(201).json(
            {
                message: 'pelicula eliminado con éxito'
            }
        );
    } catch (error) {
        console.log((error));
        return res.status(500).json(
            {
                message: 'Error al eliminar movie',
                data: error
            }
        );
    }
};
