const {Router} = require('express');

const AuthenticateUserController = require('../app/controllers/UserController/AuthenticateUserController');
const RegisterUserController = require('../app/controllers/UserController/RegisterUserController');
const {cannotAccessIfAuthenticated} = require('../app/middleware/Authentication');

let router = Router()

router.get('/login',cannotAccessIfAuthenticated, AuthenticateUserController.create);
router.post('/login',cannotAccessIfAuthenticated, AuthenticateUserController.authenticate)
router.get('/cadastro',cannotAccessIfAuthenticated, RegisterUserController.create);
router.post('/cadastro', RegisterUserController.store);
router.get('/logout', AuthenticateUserController.logout)

router.get('/perfil', (req, res) => {res.render('user/profile')});

module.exports = router;