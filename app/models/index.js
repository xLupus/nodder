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
    content: {
        type: DataTypes.TEXT,
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

User.hasOne(Role);
User.hasMany(Comment);
User.hasMany(Post)

Role.hasMany(User);

Comment.belongsTo(Post);
Comment.belongsTo(User);

Category.hasMany(Post);

Tag.belongsToMany(Post, {through: PostTag });

Post.belongsToMany(Tag, {through: PostTag});
Post.hasMany(Comment);
Post.belongsTo(User);
Post.belongsTo(Category);

//conn.sync().then(() => console.log('Models sincronizadas')).catch(err => console.log(err));

module.exports = {
    User,
    Role,
    Comment,
    Category,
    Tag,
    Post,
    PostTag
}