const { Router } = require('express');
const router = Router()
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
       cb(null, 'storage/uploads/posts');
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})
const upload = multer({storage: storage});

const GetCategoryController    = require('../app/controllers/CategoryController/GetCategoryController');
const CreateCategoryController = require('../app/controllers/CategoryController/CreateCategoryController');
const UpdateCategoryController = require('../app/controllers/CategoryController/UpdateCategoryController');

const CreatePostController = require('../app/controllers/PostController/CreatePostController');
const GetPostController    = require('../app/controllers/PostController/GetPostController');
const UpdatePostController = require('../app/controllers/PostController/UpdatePostController');

const CreateTagController = require('../app/controllers/TagController/CreateTagController');
const GetTagController    = require('../app/controllers/TagController/GetTagController');

const GetUserController = require('../app/controllers/UserController/GetUserDataController');

const {canAccessIfAuthenticated} = require('../app/middleware/Authentication');

//router.use('/admin', canAccessIfAuthenticated)

router.get('/admin/postagens', GetPostController.adminIndex);
router.get('/admin/postagem/criar', CreatePostController.create);
router.post('/admin/postagem/criar', upload.single('poster'), CreatePostController.store);
router.get('/admin/postagem/editar/:id', UpdatePostController.edit)

router.get('/admin/categorias', GetCategoryController.adminIndex)
router.get('/admin/categoria/criar', CreateCategoryController.create)
router.post('/admin/categoria/criar', CreateCategoryController.store)
router.get('/admin/categoria/editar/:id', UpdateCategoryController.edit)
router.post('/admin/categoria/editar', UpdateCategoryController.update)

router.get('/admin/tags', GetTagController.index)
router.post('/admin/tags', CreateTagController.store)

router.get('/admin/usuarios', GetUserController.adminIndex);

router.get('/admin', (req, res) => res.render('admin/profile'));

module.exports = router;