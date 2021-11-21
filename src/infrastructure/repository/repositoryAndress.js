const { ModelAddress } = require('../sequelize/models/modelAddress');
const { Op } = require("sequelize");

class RepositoryAddress {
    async create(address) {
        await ModelAddress.sync();
        const validate = await this.findAndress(address);
        if ((validate != null)) {
            //console.log("já exite o registro");
            return validate;
        }
        else {
            //console.log("não exite registro");
            console.log(address);
            const received = await ModelAddress.create(address);
            return received.dataValues;
        }
    }

    async findAndress(addressObject) {
        const Address = await ModelAddress.findOne({
            where: {
                [Op.and]: [
                    { lat: addressObject.lat },
                    { lng: addressObject.lng }
                ]
            },
            raw: true
        }).then(function (result) {
            return result;
        }).catch(function (err) {
            throw new Error('Um erro na consulta findAndress', err.stack);//
        })
        return Address;
    }

}

module.exports = { RepositoryAddress };