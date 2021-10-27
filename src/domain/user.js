
class User {
    constructor(id, name, email, addressId, phone, website, companyId) {
        this.id = id,
            this.name = name,
            this.email = email,
            this.addressId = addressId,
            this.phone = phone,
            this.website = website,
            this.companyId = companyId
    }
}
module.exports = { User };