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

    async findCompany(companyObject) {
        const Company = await ModelCompany.findOne({
            where: {
                name: companyObject.name
            },
            raw: true
        }).then(function (result) {
            // console.log(" test + " + result);
            return result;
        }).catch(function (err) {
            throw new Error('Um erro na consulta findCompany', err.stack);//
        })
        return Company;
    }

}

module.exports = { RepositoryCompany };