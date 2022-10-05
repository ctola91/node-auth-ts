import { Request, Response } from 'express';
import { json } from "sequelize/types";
import User from '../models/user';

export const getUsers = async (req: Request, res: Response) => {
    const users = await User.findAll();

    res.json({ users });
}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({
            msg: `No existe un user con el id ${id}`
        })
    }
}