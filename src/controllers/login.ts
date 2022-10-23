import { Request, Response } from 'express';
import { json } from "sequelize/types";
import { getUserByUsername } from '../services/UserService';
import { getToken } from '../services/AuthService';

export const login = async (req: Request, res: Response) => {
    try {
        let body = req.body;
        const user = await getUserByUsername(body.email);
        if (!user) {
            return res.status(401).json({
                message: "User or password incorrect"
            });
        }
        // TODO: VALIDATE PASSWORD
        const token = getToken(user);
        res.json({ user, token })
    } catch (e) {
        console.log(e);
        if (e instanceof Error) {
            res.status(400).json({ message: e.message });
        } else {
            console.log(e);
        }
    }
}