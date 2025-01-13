const express = require('express');
const router = express()
const movieController = require('../controller/movie-controller');

router.get('/movie', movieController.searchMovie);
router.get('/movie/popular', movieController.showPopularMovie);

module.exports = router