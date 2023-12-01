const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies.controller');
const authMiddleware = require('../utils/auth.middleware');

router.get('/', moviesController.getmovies);

router.get('/:movieId', moviesController.getmovieById);

router.post('/',authMiddleware.authenticateToken, moviesController.newmovie);

router.put('/:movieId',authMiddleware.authenticateToken, moviesController.updatemovie);

router.delete('/:movieId',authMiddleware.authenticateToken, moviesController.deletemovie);

module.exports = router;