const {Tag} = require('../../models/index');

class CreateTagController{
    async store(req, res){
        let {tagName} = req.body;

        try {
            let tag = await Tag.findOne({where: {name: tagName.trim()}});

            if(tag){
                // todo - enviar uma mensagem de tag ja cadastrada
                res.redirect('/admin/tags')
            }else{
                // todo - enviar uma mensagem de sucesso
                let createdTag = await Tag.create({
                    name: tagName.trim()
                });
    
                res.redirect('/admin/tags')
            }
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = new CreateTagController;