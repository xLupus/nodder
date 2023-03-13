const { User, Role } = require('../../models/index');

class GetUserDataController{
    async adminIndex(req, res){
        const users = await User.findAll({
            include: [Role]
        });

        res.render('admin/users/index', {users})
    }
}

module.exports = new GetUserDataController;