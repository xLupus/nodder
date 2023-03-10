const {Router} = require('express');

const AuthenticateUserController = require('../app/controllers/UserController/AuthenticateUserController');
const RegisterUserController = require('../app/controllers/UserController/RegisterUserController');
const CategoryController = require('../app/controllers/CategoryController/CreateCategoryController');

let router = Router()

router.get('/login', AuthenticateUserController.create);
router.post('/login', AuthenticateUserController.authenticate)
router.get('/logout', AuthenticateUserController.logout)
router.get('/cadastro', RegisterUserController.create);
router.post('/cadastro', RegisterUserController.store);

router.get('/perfil', (req, res) => {res.render('user/profile')});

router.get('/admin', (req, res) =>{
    res.render('admin/profile')
});


module.exports = router;