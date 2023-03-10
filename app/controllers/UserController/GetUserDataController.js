const { User } = require('../../models/index');

class GetUserDataController{
    create(req, res){
        res.render('user/register')
    }

    store(req, res){}
}

module.exports = new GetUserDataController;