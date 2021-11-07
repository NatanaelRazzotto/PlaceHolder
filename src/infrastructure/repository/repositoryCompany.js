const { ModelCompany } = require('../sequelize/models/modelCompany');
const { Op } = require("sequelize");

class RepositoryCompany {
    async create(company) {
        await ModelCompany.sync();
        const validate = await this.findAllWhere(company);
        if ((validate[0] != null)) {
            //console.log("já exite o registro");
            return validate[0];
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

    async findAll() {
        const company = await ModelCompany.findAll();
        return company;
    }
}

module.exports = { RepositoryCompany };