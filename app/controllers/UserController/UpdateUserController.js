const { User } = require('../../models/index');

class UpdateUserController{

    edit(req, res){
        res.render('user/edit');
    }

    update(req, res){}
}

module.exports = new UpdateUserController;