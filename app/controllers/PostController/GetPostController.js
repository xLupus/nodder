const {Post, Category, User} = require('../../models/index');
const { Op, Sequelize } = require('sequelize');

class GetPostController{
     async index(req, res){
        let query = req.query.search;
        let posts;

        if(query){
            posts = await Post.findAll({
                where: {title: {[Op.substring]: query}},
                attributes: {exclude: ['content']},
                include: [User, Category]
            });  
        }else{
            posts = await Post.findAll({
                attributes: {exclude: ['content']},
                include: [User, Category]
            });
        }
       
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