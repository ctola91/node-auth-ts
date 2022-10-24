import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../types/User";


interface TokenPayload {
    exp: number,
    accessTypes: string,
    user: User
}

export const getToken = (user: User) => {
    return jwt.sign({ user }, String(process.env.SEED), { expiresIn: process.env.TIME_TOKEN })
}

export const isValidPassword = (password: string, dbPassword: string): boolean => {
    return bcrypt.compareSync(password, dbPassword);
}

export const validateToken = (token: string) => {
    try {
        let decoded = jwt.verify(token, String(process.env.SEED));
        return { decoded, err: null }
    } catch (e) {
        console.log(e);
        return { decoded: null, err: e };
    }
}

export const isAdmin = (user: User) => {
    return user.userrole === 'ADMIN_ROLE'
}