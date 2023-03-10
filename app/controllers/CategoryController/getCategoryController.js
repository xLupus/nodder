const { Category, Tag } = require('../../models/index');

class getCategoryController {
    async index(req, res){
        let tags = await Tag.findAll();
        let categories = await Category.findAll()

        res.render('category/index', {categories, tags})
    }

    create(req, res){
        res.render('category/create');
    }
}

module.exports = new getCategoryController;