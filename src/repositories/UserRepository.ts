import User from "../models/user";

const findOneByEmail = async (email: string) => {
    return await User.findOne({ where: { email } });
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

export default {
    findOneByEmail,
    findAndCountAll,
    createUser
}