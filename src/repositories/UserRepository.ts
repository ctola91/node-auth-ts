import User from "../models/user";

const getUserByUsername = async (username: string) => {
    return await User.findOne({ where: { username } });
}

export default {
    getUserByUsername
}