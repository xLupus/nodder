const { Post, Category, User, Comment, Tag } = require('../../models/index');
const { Op, Sequelize } = require('sequelize');

class GetPostController {
    async index(req, res) {
        let query = req.query.search;
        //let postsPerPage = req.query.postsPerPage ?? 1;
        let conditions = {
            attributes: [
                'title', 'subtitle', 'poster', 'slug',
                [Sequelize.fn('DATE_FORMAT', Sequelize.col('post.createdAt'), '%d/%m/%Y'), 'writtenIn']
            ],
            include: [{
                model: Category,
                attributes: ['id', 'name']
            }]
        }

        if (query) {
            conditions.where = {title: {[Op.substring]: query.trim().replaceAll(' ', '%')}}
        }; 

        let posts = await Post.findAll(conditions);

        res.render('post/index', { posts, query })
    }

    async show(req, res) {
        let slug = req.params.slug;

        let post = await Post.findOne({
            where: { slug: slug },
            attributes: [
                'title', 'subtitle', 'content',
                [Sequelize.fn('DATE_FORMAT', Sequelize.col('createdAt'), '%d/%m/%Y'), 'createdAt']
            ],
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
                {
                    model: Tag,
                    attributes: ['id', 'name'],
                    through: { attributes: [] }
                },
                {
                    model: Category,
                    attributes: ['id', 'name']
                },
                {
                    model: Comment
                }
            ]
        })

        post ? res.render('post/show', { post }) : res.redirect('/postagens')
    }

    async adminIndex(req, res){
        let posts = await Post.findAll({
            include: [Category],
            attributes: {exclude: ['content']},
            order: [['id', 'DESC']]
        });
        
        res.render('admin/posts/index', {posts});
    }
}

module.exports = new GetPostController;