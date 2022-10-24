import User from "../models/user";

const findOneByEmail = async (username: string) => {
    return await User.findOne({ where: { username } });
}

const findAndCountAll = async (from = 0, limit = 5, filters: any, attributes: any) => {
    const data = await User.findAndCountAll({
        limit, offset: from,
        where: filters,
        attributes
    });

    return data;
}

const createUser = async (firstName: string, lastName: string, email: string, password: string, userrole: string) => {
    const user = await User.build({
        firstName,
        lastName,
        email,
        password,
        userrole
    });
    user.save();
    return user;
}

export default {
    findOneByEmail,
    findAndCountAll,
    createUser
}