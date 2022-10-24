import { NextFunction, Request, Response } from "express";
import User from "../models/user";
import { validateToken } from '../services/AuthService';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    let token = req.get("Authorization");
    token = token?.split(' ')[1];
    if(token) {
        const { decoded, err} = validateToken(token);
        if(err) {
            return res.status(401).json({
                message: 'Token Invalid'
            });
        }
        req.user = decoded['user'];
        next();
    }

}