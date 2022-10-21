import { Request, Response } from 'express';
import { json } from "sequelize/types";
import { getUserByUsername } from '../services/UserService';
import { isValidPassword, getToken } from '../services/AuthService';
import User from '../types/User';

export const login = async (req: Request, res: Response) => {
    let body = req.body;
    const user = await getUserByUsername(body.email);
    if (!user) {
        return res.status(401).json({
            message: "User or password incorrect"
        });
    }
    // TODO: VALIDATE PASSWORD
    const token = getToken(user);
}