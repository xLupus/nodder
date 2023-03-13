const { Category } = require('../../models/index');
const slugify = require('slugify');

class CreateCategoryController {
    create(req, res){
        res.render('admin/categories/create');
    }

    async store(req, res){
        let {name, description} = req.body;

        try {
            let category = await Category.findOne({where: {name: name.trim()}});

            if(!category){
                Category.create({
                    name: name.trim(),
                    description: description.trim(),
                    slug: slugify(name.trim(), {lower: true})
                });    
            }
            // todo - Implementar mensagens de feedback
    
            res.redirect('/admin/categoria/criar')
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = new CreateCategoryController;