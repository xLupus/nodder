const {Post, User, Category, Tag } = require('../../models/index');

class getCategoryController {
    async index(req, res){
        let tags = await Tag.findAll();
        let categories = await Category.findAll()

        res.render('category/index', {categories, tags})
    }

    show(req, res){
        let {category} = req.params;

        
        Post.findAll({
            where: {CategoryId: category}
        }).then(posts => {
            res.render('category/show',{posts})

        });
    }
}

module.exports = new getCategoryController;