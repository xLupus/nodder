const { User } = require('../../models/index');
const validator = require('validator');
const bcrypt = require('bcrypt');

class CreateUserController{
    create(req, res){
        res.render('user/register')
    }

    store(req, res){
        let {name, email, password} = req.body;

        let nameIsInvalid   = validator.isEmpty(name, {ignore_whitespace: true});
        let emailIsValid    = validator.isEmail(email);
        let passwordIsValid = validator.isStrongPassword(password)

        if(!nameIsInvalid && emailIsValid && passwordIsValid){
            User.findOne({where: {email: email}}).then(user => {
                if(!user){
                    let salt = bcrypt.genSaltSync();

                    User.create({
                        name: name,
                        email: email,
                        password: bcrypt.hashSync(password, salt),
                        RoleId: 1
                    }).then(response => {
                        res.session.user = {
                            id: response.id,
                            email: response.email,
                            role: response.RoleId
                        }
                                                
                        res.redirect('/');
                    });
                }
            });
        }

        res.redirect('/cadastro');
    }
}

module.exports = new CreateUserController;