const {Router} = require('express');

const GetPostController = require('../app/controllers/PostController/GetPostController');
const CreatePostController = require('../app/controllers/PostController/CreatePostController');

let router = Router()

router.get('/postagens', GetPostController.index);
router.get('/postagem/criar', CreatePostController.create);
router.post('/postagem/criar', CreatePostController.store);

module.exports = router;