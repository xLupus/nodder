const {Router} = require('express');

const getCategoryController = require('../app/controllers/CategoryController/getCategoryController');
let router = Router()

router.get('/categorias', getCategoryController.index);
router.get('/categoria/:category/posts', getCategoryController.show)

module.exports = router;