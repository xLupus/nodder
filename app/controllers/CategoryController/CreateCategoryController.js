const { Category } = require('../../models/index');
const slugify = require('slugify');

class CreateCategoryController {
    create(req, res){
        res.render('category/create');
    }

    store(req, res){
        let {name, description} = req.body;

        Category.findOne({where: {name: name}}).then(category => {
            if(!category){
                Category.create({
                    name: name,
                    description: description,
                    slug: slugify(name, {lower: true})
                });                
            }
        })

        res.redirect('/categoria/criar')
    }
}

module.exports = new CreateCategoryController;