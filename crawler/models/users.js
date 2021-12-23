const { Sequelize } = require('sequelize');
const db = require('.');
//user만 sequelize에서 생성해주는 id값 사용
module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                email: {
                    type: Sequelize.STRING(40),
                    allowNull: true,
                    unique: true,
                  },
                  nickname: {
                    type: Sequelize.STRING(15),
                    allowNull: true,
                  },
                  provider: {
                    type: Sequelize.STRING(10),
                    allowNull: true,
                    defaultValue: 'kakao',
                  },
                  snsId: {
                    type: Sequelize.STRING(30),
                    allowNull: true,
                  },
                  sido: {
                      type:Sequelize.STRING(15),
                      defaultValue:'서울'
                  },
            },
            {
                sequelize,
                timestamps: true,
                underscored: false, //_사용 여부
                modelName: 'User', //js에서사용
                tableName: 'users', //db에서 사용
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
    static associate(db) {}
};