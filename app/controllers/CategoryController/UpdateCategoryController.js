const { Category } = require('../../models/index');
const slugify = require('slugify');

class UpdateCategoryController {
    async edit(req, res) {
        const id = req.params.id;
        let category = await Category.findOne({where: {id: id}});
        res.render('admin/categories/edit', {category});
    }

    async update(req, res) {
        const {id, name, description} = req.body;

        try {
            let category = await Category.findByPk(id);

            if(category && name && description){
                Category.update({
                    name: name.trim(),
                    slug: slugify(name.trim(), {lower: true}),
                    description: description.trim()
                }, {where: {id: id}})
                
                res.redirect('/admin/categorias')
            }else{
                res.redirect('back')
            }
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = new UpdateCategoryController;