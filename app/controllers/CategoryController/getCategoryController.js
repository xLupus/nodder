const {Post, User, Category, Tag } = require('../../models/index');

class getCategoryController {
    async index(req, res){
        try {
            let tags = await Tag.findAll();
            let categories = await Category.findAll()
            res.render('category/index', {categories, tags})  

        } catch (error) {
            res.send(error)
        }
    }

    async show(req, res){
        let {category} = req.params;

        try {
            let posts = await Post.findAll({where: {CategoryId: category}});
            res.render('category/show',{posts})
            
        } catch (error) {
            res.send(error)
        }
    }

    async adminIndex(req, res){
        let categories = await Category.findAll();

        res.render('admin/categories/index', {categories})
    }
}

module.exports = new getCategoryController;