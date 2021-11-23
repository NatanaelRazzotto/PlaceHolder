const { ModelCompany } = require('../sequelize/models/modelCompany');
const { Op } = require("sequelize");

class RepositoryCompany {
    constructor(){
      //  await ModelCompany.sync();
    }
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
            return result;
        }).catch(function (err) {
            throw new Error('Um erro na consulta findCompany', err.stack);//
        })
        return Company;
    }

    async findCompanyID(companyObject) {
        const Company = await ModelCompany.findOne({
            where: {
                companyId: companyObject.companyId
            },
            raw: true
        }).then(function (result) {
            return result;
        }).catch(function (err) {
            throw new Error('Um erro na consulta findCompanyID', err.stack);//
        })
        return Company;
    }

    async deleteByIdCompany(companyObject) {
        const company = await ModelCompany.findByPk(companyObject.companyId);
        if (company != null) {
            const received = company.destroy();
            return received;
        }
        return null;
    }

}

module.exports = { RepositoryCompany };