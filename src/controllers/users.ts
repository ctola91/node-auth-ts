import { Request, Response } from 'express';
import { json } from "sequelize/types";
import User from '../models/user';
import { createUser, getUserByEmail, findAndCountAll } from '../services/UserService';

export const getUsers = async (req: Request, res: Response) => {
    try {
        let from: number = Number(req.query.from) || 0;
        let limit: number = Number(req.query.limit) || 5;
        const attributes = ['id', 'firstName', 'email', 'userrole', 'state'];

        const { count, rows } = await findAndCountAll(from, limit, attributes)
        return res.json({
            users: rows,
            count
        });
    } catch (e) {
        if (e instanceof Error) {
            res.status(400).json({ message: e.message });
        } else {
            console.log(e);
        }
    }
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

export const postUser = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const existEmail = await getUserByEmail(body.email);

        if (existEmail) {
            return res.status(400).json({
                msg: 'Ya existe un user con el email ' + body.email
            });
        }

        const user = await createUser(body.firstName, body.lastName, body.email, body.password, body.userrole);

        res.status(201).json(user);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const putUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        await user.update(body);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }

    await user.update({ isActive: false });
    // await usuario.destroy();

    res.json(user);
}