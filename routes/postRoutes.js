const {Router} = require('express');

const GetPostController = require('../app/controllers/PostController/GetPostController');
const CreatePostController = require('../app/controllers/PostController/CreatePostController');
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

let router = Router()

router.get('/postagens', GetPostController.index);
router.get('/postagem/criar', CreatePostController.create);
router.post('/postagem/criar', upload.single('poster'), CreatePostController.store);
router.get('/postagem/:slug', GetPostController.show)

module.exports = router;