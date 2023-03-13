const {Post, Category, Tag, PostTag} = require('../../models/index');
const slugify = require('slugify');
const path = require('path')


class CreatePostController{
    async create(req, res){
        let categories = await Category.findAll();
        let tags = await Tag.findAll();

        res.render('admin/posts/create',{categories, tags})
    }

    /**
     * todo - Aplicar transation e checagens
     * @param {*} req 
     * @param {*} res 
     */
    async store(req, res){
        let {title, subtitle, category, content, tags} = req.body;
        let poster = req.file;

        if(title && subtitle && category && content && poster){
            let post = await Post.findOne({where: {title: title}});

            if(!post){
                let postCreated = await Post.create({
                    title: title,
                    subtitle: subtitle,
                    poster: '\\' + poster.path,
                    content: content,
                    slug: slugify(title, {lower: true}),
                    UserId: 1,
                    CategoryId: category
                });
                
                tags.forEach(tag => {
                    PostTag.create({
                        PostId: postCreated.id,
                        TagId: tag
                    });
                });
                
            }

            res.redirect('/admin/postagem/criar')
        }

    }
}


module.exports = new CreatePostController;


/*

       
                
        
*/