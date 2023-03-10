const { User } = require('../../models/index');
const bcrypt = require('bcrypt');

class AuthenticateUserController {
    create(req, res) {
        res.render('user/login')
    }

    authenticate(req, res) {
        const {email, password} = req.body;

        User.findOne({where: {email: email}}).then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                req.session.user = {
                    id: user.id,
                    email: user.email,
                    role: user.RoleId
                }

                res.redirect('/')
            }else{
                res.redirect('/login')
            }            
        })
    }

    logout(req, res){
        req.session.destroy();
        res.redirect('/')
    }
}

module.exports = new AuthenticateUserController;