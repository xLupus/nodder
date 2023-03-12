const {Post, Category, User} = require('../../models/index');
const { Op, Sequelize } = require('sequelize');

class GetPostController{
     async index(req, res){
        let query = req.query.search;
        let postsPerPage = req.query.postsPerPage ?? 1;
        let conditions = {
            attributes: {exclude: ['content']},
            include: [User, Category]
        }

        if(query) {conditions.where = {title: {[Op.substring]: query}};}

        let posts = await Post.findAll(conditions);

        res.render('post/index', {posts, query})
    }

     async show(req, res){
        let slug = req.params.slug;

        Post.findOne({
            where: {slug: slug},
            include: [Category, User],
        }).then(post => {
            post ? res.render('post/show', {post}) : res.redirect('/postagens')
        });
    }


}

module.exports = new GetPostController;