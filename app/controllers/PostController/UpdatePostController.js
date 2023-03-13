const {Post, Category, Tag} = require('../../models/index');

class UpdatePostController{
    async edit(req, res){
        let id = req.params.id;

        let post = await Post.findOne({
            where: { id: id },
            include: [
                {
                    model: Tag,
                    attributes: ['id', 'name'],
                    through: { attributes: [] }
                },
                {
                    model: Category,
                    attributes: ['id', 'name']
                }
            ]
        })

        let categories = await Category.findAll();
        let tags = await Tag.findAll();

        //res.send(tags)

        res.render('admin/posts/edit', {post, categories, tags})

    }

    update(req, res){
        
    }
}

module.exports = new UpdatePostController;