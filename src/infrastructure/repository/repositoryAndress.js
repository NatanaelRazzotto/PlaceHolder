const { ModelAddress } = require('../sequelize/models/modelAddress');
const { Op } = require("sequelize");

class RepositoryAddress {
    async create(address) {
        await ModelAddress.sync();
        const validate = await this.findAllWhere(address);
        if ((validate[0] != null)) {
            //console.log("já exite o registro");
            return validate[0];
        }
        else {
            //console.log("não exite registro");
            const received = await ModelAddress.create(address);
            return received.dataValues;
        }
    }

    async findAllWhere(addressObject) {
        const Address = await ModelAddress.findAll({
            where: {
                [Op.and]: [
                    { lat: addressObject.lat },
                    { lng: addressObject.lng }
                ]
            },
            raw: true,
            limit: 1
        }).then(function (result) {
            //  console.log(" test + " + result);
            return result;
        });
        return Address;
    }

    async findAll() {
        const results = await ModelAddress.findAll();
        return results;
    }
}

module.exports = { RepositoryAddress };