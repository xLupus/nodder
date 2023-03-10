const {Post, Category, User} = require('../../models/index');

class GetPostController{
    index(req, res){
        Post.findAll({include: [Category, User]}).then(posts => {
            res.render('post/index', {posts})
        })
    }

    show(req, res){
        
    }

    search(req, res){
        
    }
}

module.exports = new GetPostController;