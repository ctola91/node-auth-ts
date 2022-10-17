import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { BackwardOnlyStrictArgs } from "nexus/dist/plugins/connectionPlugin";
import User from '../models/user';

export const getToken = (user) => {
    return jwt.sign({ user })
}

export const isValidPassword: boolean = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
}

export const validateToken = (token) => {

}

export const isAdmin = (user) => {

}