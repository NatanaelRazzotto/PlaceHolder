const { ModelUser } = require('../sequelize/models/modelUser');

class RepositoryUser {

  async create(user) {
    // console.log(user);
    await ModelUser.sync();
    const validate = await this.findUser(user)
    //console.log(validate[0])
    if ((validate != null)) {
      //console.log("já exite o registro");
      //  console.log(validate);
      return validate;
    }
    else {
      //console.log("não exite registro");
      const received = await ModelUser.create(user);
      return received.dataValues;
    }
  }

  async findUser(userObject) {//findByPk
    const User = await ModelUser.findOne({
      where: {
        id: userObject.id
      },
      raw: true
    }).then(function (result) {
      // console.log(" test + " + result);
      return result;
    }).catch(function (err) {
      throw new Error('Um erro na consulta findUser', err.stack);//
    })
    return User;
  }

  async deleteByIdUser(userObject) {
    const user = await ModelUser.findByPk(userObject.id);
    //console.log(user)
    if (user != null) {
      const received = user.destroy();
      return received;
    }
    return null;
  }
}

module.exports = { RepositoryUser };
