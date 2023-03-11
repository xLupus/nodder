const {Router} = require('express');

const getCategoryController = require('../app/controllers/CategoryController/getCategoryController');
const CreateCategoryController = require('../app/controllers/CategoryController/CreateCategoryController');
let router = Router()

router.get('/categorias', getCategoryController.index);
router.get('/categoria/criar', CreateCategoryController.create)
router.post('/categoria/criar', CreateCategoryController.store)
router.get('/categoria/:category/posts', getCategoryController.show)

module.exports = router;