import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/user";

const TIME_TOKEN = process.env.TIME_TOKEN || 60 * 60 * 24 * 30;

export const getToken = (user: User) => {
    return jwt.sign({ user }, String(process.env.SEED), { expiresIn: Number(TIME_TOKEN) })
}

export const isValidPassword = (password: string, dbPassword: string): boolean => {
    return bcrypt.compareSync(password, dbPassword);
}

export const validateToken = (token: string) => {
    try {
        let decoded = jwt.verify(token, String(process.env.SEED)) as JwtPayload;
        return { decoded, err: null }
    } catch (e) {
        console.log(e);
        return { decoded: null, err: e };
    }
}

export const isAdmin = (user: User) => {
    return user.role === 'ADMIN_ROLE'
}