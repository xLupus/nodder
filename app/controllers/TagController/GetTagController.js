const {Tag} = require('../../models/index');

class GetTagController{
    async index(req, res){
        let tags = Tag.findAll();
        //res.send(tags)
        res.render('admin/tags/index', {tags});
    }
}

module.exports = new GetTagController;