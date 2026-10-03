import userRepository from "../repositories/UserRepository.js";

class UserService {
  async getAll() {
    return userRepository.getAll();
  }

  async getById(id) {
    const user = await userRepository.findById(id);
    if (!user) {
      const err = new Error("Usuario no encontrado");
      err.status = 404;
      throw err;
    }
    return {
      id: user._id,
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      birthdate: user.birthdate,
      url_profile: user.url_profile,
      address: user.address,
      createdAt: user.createdAt,
      roles: user.roles.map((r) => r.name),
    };
  }

  async updateUser(id, data) {
    const user = await userRepository.findById(id);
    if (!user) {
      const err = new Error("Usuario no encontrado");
      err.status = 404;
      throw err;
    }
    
    if (data.name) user.name = data.name;
    if (data.lastName) user.lastName = data.lastName;
    if (data.phoneNumber) user.phoneNumber = data.phoneNumber;
    if (data.birthdate) user.birthdate = data.birthdate;
    if (data.url_profile) user.url_profile = data.url_profile;
    if (data.address) user.address = data.address;

    await user.save();
    return this.getById(id);
  }
}

export default new UserService();
