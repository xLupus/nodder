const { User } = require('../../models/index');
const bcrypt = require('bcrypt');
const validator = require('validator')

class AuthenticateUserController {
    create(req, res) {
        res.render('user/login')
    }

    authenticate(req, res) {
        const {email, password} = req.body;

        let emailIsValid = validator.isEmpty(email);
        let passwordIsValid = validator.isEmpty(password);

        User.findOne({where: {email: email}}).then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                req.session.user = {
                    id: user.id,
                    email: user.email,
                    role: user.RoleId
                }

                res.redirect('/')
            }else{
                res.render('user/login', {message: "Credenciais Invalidas"})
            }            
        })
    }

    logout(req, res){
        req.session.destroy();
        res.redirect('/')
    }
}

module.exports = new AuthenticateUserController;