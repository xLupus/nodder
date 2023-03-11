const {Post, Category, Tag} = require('../../models/index');
const slugify = require('slugify');
const path = require('path')


class CreatePostController{
    async create(req, res){
        let categories = await Category.findAll();
        let tags = await Tag.findAll();

        res.render('admin/posts/create',{categories, tags})
       // res.render('admin/posts/create', );
    }

    async store(req, res){
        let {title, subtitle, category, content} = req.body;
        let poster = req.file;

        //let fileext = path.extname(req.file.filename)

        //res.send(title,subtitle,category,content)

        if(title && subtitle && category && content && poster){
            let post = await Post.findOne({where: {title: title}});

            if(!post){
                Post.create({
                    title: title,
                    subtitle: subtitle,
                    poster: '\\' + poster.path,
                    content: content,
                    slug: slugify(title, {lower: true}),
                    UserId: 1,
                    CategoryId: category
                });                
            }
        }
                
        res.redirect('/postagem/criar')
    }
}


module.exports = new CreatePostController;


/*

*/