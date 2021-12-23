const Sequelize = require('sequelize');
const PrivateApt = require('./privateApt');
const User = require('./users');
const Comment = require('./comments');
const Like = require('./likes');
const PubNotice = require('./pubNotice');
const PrivateImg = require('./privateImg')

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.PrivateApt = PrivateApt;
db.PrivateImg=PrivateImg
db.PubNotice = PubNotice;
db.User = User;
db.Comment = Comment;
db.Like = Like;

PrivateApt.init(sequelize);
PrivateImg.init(sequelize);
PubNotice.init(sequelize);
User.init(sequelize); //연결 객체 (sequelize)를 이용해서 연결!!
Comment.init(sequelize);
Like.init(sequelize);

PrivateApt.associate(db);
PrivateImg.associate(db);
PubNotice.associate(db);
User.associate(db);
Comment.associate(db);
Like.associate(db);

module.exports = db;
