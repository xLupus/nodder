const {Router} = require('express');

const GetPostController = require('../app/controllers/PostController/GetPostController');

let router = Router()

router.get('/postagens', GetPostController.index);
router.get('/postagem/:slug', GetPostController.show)

module.exports = router;