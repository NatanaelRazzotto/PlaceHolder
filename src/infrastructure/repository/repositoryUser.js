const { ModelUser } = require('../sequelize/models/modelUser');

class RepositoryUser {
  constructor(){
   // await ModelUser.sync();
  }
  async create(user) {
    await ModelUser.sync();
    const validate = await this.findByPkUser(user); 
    
    if ((validate != null)) {
      const update =  await this.updateByIdUser(user,validate);
      return update;

    }
    else {
      const received = await ModelUser.create(user);
      return received.dataValues;
    }
  }

  async findByPkUser(userObject) {
    const User = await ModelUser.findByPk(userObject.id);
    return User;
}

  async findUser(userObject) {//findByPk
    const User = await ModelUser.findOne({
      where: {
        id: userObject.id
      },
      raw: true
    }).then(function (result) {
      return result;
    }).catch(function (err) {
      throw new Error('Um erro na consulta findUser', err.stack);//
    })
    return User;
  }

  async deleteByIdUser(userObject) {
    const user = await ModelUser.findByPk(userObject.id);
    if (user != null) {
      const received = user.destroy();
      return received;
    }
    return null;
  }

  async searchForUpdateByIdUser(userObject) {
    const userToChange = await this.findByPkUser(userObject);
    const update =  await this.updateByIdUser(userObject,userToChange);
    return update;
  }

  async updateByIdUser(userObject,userToChange) {       

    Object.entries(userObject).forEach(([key, value]) => {
      userToChange[key] = value;
    });

    const result = await userToChange.save();
    return result.dataValues;
  } 
  

  
}

module.exports = { RepositoryUser };
