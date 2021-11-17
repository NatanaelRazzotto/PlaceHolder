const { ModelCompany } = require('../sequelize/models/modelCompany');
const { Op } = require("sequelize");

class RepositoryCompany {
    async create(company) {
        await ModelCompany.sync();
        const validate = await this.findCompany(company);
        if ((validate != null)) {
            //console.log("já exite o registro");
            return validate;
        }
        else {
            //console.log("não exite registro");
            const received = await ModelCompany.create(company);
            return received.dataValues;
        }
    }

    async findAllWhere(companyObject) {
        const Company = await ModelCompany.findAll({
            where: {
                name: companyObject.name
            },
            raw: true,
            limit: 1
        }).then(function (result) {
            // console.log(" test + " + result);
            return result;
        });
        return Company;
    }
    async findCompany(companyObject) {
        const Company = await ModelCompany.findOne({
            where: {
                name: companyObject.name
            },
            raw: true
        }).then(function (result) {
            // console.log(" test + " + result);
            return result;
        }).catch(function (errorResult) {
            // console.error("ocorreu um erro com o findAlbumFromUser", errorResult);
            // return result;
        });
        return Company;
    }

    async findAll() {
        const company = await ModelCompany.findAll();
        return company;
    }
}

module.exports = { RepositoryCompany };