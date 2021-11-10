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

  async findUser(userObject) {
    const User = await ModelUser.findOne({
      where: {
        id: userObject.id
      },
      raw: true
    }).then(function (result) {
      // console.log(" test + " + result);
      return result;
    }).catch(function (errorResult) {
      // console.error("ocorreu um erro com o findAlbumFromUser", errorResult);
      // return result;
    });
    return User;
  }

  /* async findAllUserFromName(searchObject) {
     const User = await ModelUser.findAll({
       where: {
         userId: searchObject.userId
       },
       raw: true
     }).then(function (result) {
       // console.log(" test + " + result);
       return result;
     }).catch(function (errorResult) {
       // console.error("ocorreu um erro com o findAlbumFromUser", errorResult);
       // return result;
     });
     return User;
   }*/

  //https://sequelize.org/master/manual/model-querying-finders.html
  async findAll() {
    const users = await ModelUser.findAll();
    return users;
  }

  async findByPk(pk) {
    const user = await ModelUser.findByPk(pk);
    return user;
  }

  async findAllWhere(user) {
    const User = await ModelUser.findAll({
      where: {
        id: user.id
      },
      raw: true,
      limit: 1
    }).then(function (result) {
      //  console.log(" test + " + result);
      return result;
    });
    return User;
  }

  async updateById(user) {
    const userToChange = await this.findByPk(user.id);
    Object.entries(user).forEach(([key, value]) => {
      userToChange[key] = value;
    });

    const result = await userToChange.save();
    return result;
  }

  async deleteByIdWhere(idUser) {
    const received = await ModelUser.destroy({ where: { idUser } });
    return received;
  }
  async deleteByIdModel(idUser) {
    const userModel = await this.findByPk(idUser);
    const received = userModel.destroy();
    return received;
  }
}

module.exports = { RepositoryUser };
