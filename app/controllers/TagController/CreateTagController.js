const {Tag} = require('../../models/index');

class CreateTagController{
    async store(req, res){
        let {tagName} = req.body;

        let tag = await Tag.findOne({where: {name: tagName}});

    }
}

module.exports = new CreateTagController;