const conn = require('../../database/database')
const {DataTypes} = require('sequelize')

const Role = conn.define('Role', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const User = conn.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Comment = conn.define('Comment', {
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

const Post = conn.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subtitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    poster: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    updateBy: {
        type: DataTypes.INTEGER
    }
});

const Category = conn.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Tag = conn.define('Tag', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

const PostTag = conn.define('PostTag', {});

User.hasOne(Role, {onDelete: 'cascade'} );
User.hasMany(Comment, {onDelete: 'cascade'});
User.hasMany(Post, {onDelete: 'cascade'})

Comment.belongsTo(Post, {onDelete: 'cascade'});
Comment.belongsTo(User, {onDelete: 'cascade'});

Category.hasMany(Post, {onDelete: 'cascade'});

Tag.belongsToMany(Post, {through: PostTag, onDelete: 'cascade'});

Post.belongsToMany(Tag, {through: PostTag, onDelete: 'cascade'});
Post.hasMany(Comment, {onDelete: 'cascade'});
Post.belongsTo(User, {onDelete: 'cascade'});
Post.belongsTo(Category, {onDelete: 'cascade'});

//conn.sync({force: true}).then(() => console.log('Models sincronizadas')).catch(err => console.log(err));

module.exports = {
    User,
    Role,
    Comment,
    Category,
    Tag,
    Post,
    PostTag
}