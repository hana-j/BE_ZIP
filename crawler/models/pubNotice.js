const Sequelize = require('sequelize');
module.exports = class PubNotice extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            PAN_SS: {
                // 공고상태
                type: Sequelize.STRING(20), 
                allowNull: false,
            }, 
            RNUM: {
                // 순번
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            PAN_NT_ST_DT: {
                // 공고 게시일
                type: Sequelize.STRING(20), 
                allowNull: false,
            }, 
            AIS_TP_CD: {
                // 매물 유형 코드
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            SPL_INF_TP_CD: {
                // 공급정보 구분코드
                type: Sequelize.STRING(20), 
                allowNull: false, 
            },
            CNP_CD_NM: {
                // 지역명
                type: Sequelize.STRING(20), 
                allowNull: false, 
            },
            PAN_ID: {
                // 공고 아이디
                type: Sequelize.BIGINT, 
                allowNull: false,
                primaryKey: true,
            },
            UPP_AIS_TP_NM: {
                // 공고유형명
                type: Sequelize.STRING(20), 
                allowNull: false, 
            },
            AIS_TP_CD_NM: {
                // 공고 세부 유형명
                type: Sequelize.STRING(20), 
                allowNull: false, 
            },
            CLSG_DT: {
                // 공고 마감일
                type: Sequelize.STRING(20), 
                allowNull: false, 
            },
            PAN_DT: {
                // 모집 공고일
                type: Sequelize.STRING(20), 
                allowNull: false, 
            },
            UPP_AIS_TP_CD: {
                // 상위 매물 유형 코드
                type: Sequelize.STRING(20), 
                allowNull: false, 
            },
            PAN_NM: {
                // 공고명
                type: Sequelize.STRING(80), 
                allowNull: false, 
            },
            ALL_CNT: {
                // 전체조회건수
                type: Sequelize.STRING(20), 
                allowNull: false, 
            },
            DTL_URL: {
                // 공고 상세 URL
                type: Sequelize.TEXT, 
                allowNull: false, 
            },
            CCR_CNNT_SYS_DS_CD: {
                // 고객센터 연계 시스템 구분코드
                type: Sequelize.STRING(20), 
                allowNull: false, 
            },

        }, {
            sequelize,
            timestamps: false, 
            underscored: false, 
            modelName: 'PubNotice', 
            tableName: 'pubnotices', 
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) { }
};
