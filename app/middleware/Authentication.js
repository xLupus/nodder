function canAccessIfAuthenticated(req, res, next) {
    if(req.session.user){
        next();
    } else {
        res.redirect('/login');
    }
}

function cannotAccessIfAuthenticated(req, res, next){
    if(req.session.user){
        res.redirect('back');
    } else {
        next()
    }
}


module.exports = {
    canAccessIfAuthenticated,
    cannotAccessIfAuthenticated
};