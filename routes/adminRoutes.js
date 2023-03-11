const {Router} = require('express');
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

const CreateCategoryController = require('../app/controllers/CategoryController/CreateCategoryController');
const CreatePostController = require('../app/controllers/PostController/CreatePostController');
const {canAccessIfAuthenticated} = require('../app/middleware/Authentication');

router.use('/admin', canAccessIfAuthenticated)


router.get('/admin/postagem/criar', CreatePostController.create);
router.post('/admin/postagem/criar', upload.single('poster'), CreatePostController.store);
router.get('/admin/categoria/criar', CreateCategoryController.create)
router.post('/admin/categoria/criar', CreateCategoryController.store)


router.get('/admin', (req, res) =>{ res.render('admin/profile')});


module.exports = router;