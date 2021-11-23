const { ModelAddress } = require('../sequelize/models/modelAddress');
const { Op } = require("sequelize");

class RepositoryAddress {
    constructor(){
        //await ModelAddress.sync();
    }
    async create(address) {
        await ModelAddress.sync();
        const validate = await this.findAndress(address);
        if ((validate != null)) {
            return validate;
        }
        else {
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

    async findAndressID(addressObject) {
        const Address = await ModelAddress.findOne({
            where: {
                addressId: addressObject.addressId,
            },
            raw: true
        }).then(function (result) {
            return result;
        }).catch(function (err) {
            throw new Error('Um erro na consulta findAndressID', err.stack);//
        })
        return Address;
    }

    async deleteByIdAddress(addressObject) {
        const address = await ModelAddress.findByPk(addressObject.addressId);
        //console.log(user)
        if (address != null) {
            const received = address.destroy();
            return received;
        }
        return null;
    }

}

module.exports = { RepositoryAddress };