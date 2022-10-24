import { NextFunction, Request, Response } from "express";
import User from "../models/user";
import { validateToken, isAdmin } from '../services/AuthService';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    let token = req.get("Authorization");
    token = token?.split(' ')[1];
    if (token) {
        const { decoded, err } = validateToken(token);
        if (err) {
            return res.status(401).json({
                message: 'Token Invalid'
            });
        }
        if (decoded) {
            let user = decoded['user'];
            delete user.password;
            req.user =  user;
        }
        next();
    } else {
        return res.status(401).json({
            message: 'Token Invalid'
        });
    }

}

export const verifyRole = (req: Request, res: Response, next: NextFunction) => {
        const user = req.user as User;
        if (!isAdmin(user)) {
          return res.status(401).json({
            ok: false,
            err: {
              message: "need admin role",
            },
          });
        }
        next();
}