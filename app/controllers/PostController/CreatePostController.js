const {Post, Category, Tag} = require('../../models/index');
const slugify = require('slugify');

class CreatePostController{
    async create(req, res){
        let categories = await Category.findAll();
        let tags = await Tag.findAll();

        res.render('post/create', {categories, tags});
    }

    async store(req, res){
        let {title, category, content, tags} = req.body;

        if(title && category && content && tags){
            let post = await Post.findOne({where: {title: title}});

            if(!post){
                Post.create({
                    title: title,
                    content: content,
                    slug: slugify(title, {lower: true}),
                    UserId: 7,
                    CategoryId: category
                })
            }
        }
                
        res.redirect('/postagem/criar')
    }
}


module.exports = new CreatePostController;