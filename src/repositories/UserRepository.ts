import User from "../models/user";

const findOneByEmail = async (email: string) => {
    return await User.findOne({ where: { email } });
}

const findOneById = async (id: number) => {
    return await User.findOne({ where: { id } })
}

const findAndCountAll = async (from = 0, limit = 5, filters: any, attributes: any) => {
    const data = await User.findAndCountAll({
        limit, offset: from,
        where: filters,
        attributes
    });

    return data;
}

const createUser = async (firstName: string, lastName: string, email: string, password: string, role: string) => {
    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        role
    });
    return user;
}

const modifyUser = async (userId: number, firstName: string, lastName: string, email: string, password: string, role: string) => {
    const currentUser = await User.findOne({ where: { id: userId } });
    if (currentUser) {
        currentUser.firstName = firstName;
        currentUser.lastName = lastName;
        currentUser.email = email;
        currentUser.password = password;
        currentUser.role = role;
        return await currentUser.save();
    }
    return null;
}

const deleteUser = async (id: number) => {
    const deleteActive = {
        isActive: false,
    }
    const currentUser = await User.findOne({ where: { id } });
    if (currentUser) {
        currentUser.isActive = deleteActive.isActive;
        return await currentUser.save();
    }
    return null;
}

export default {
    findOneByEmail,
    findOneById,
    findAndCountAll,
    createUser,
    modifyUser,
    deleteUser
}