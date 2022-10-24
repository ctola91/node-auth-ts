import UserRepository from '../repositories/UserRepository';
import bcrypt from 'bcrypt';

export const getUserByEmail = async (email: string) => await UserRepository.findOneByEmail(email)

export const findAndCountAll = async (from = 0, limit = 5, attributes: any) => {
    let defaultFilters = {
        isActive: true
    }

    return await UserRepository.findAndCountAll(from, limit, defaultFilters, attributes);
}

export const createUser = async (firstName: string, lastName: string, email: string, password: string, userrole: string) => {
    return await UserRepository.createUser(firstName, lastName, email, bcrypt.hashSync(password, 10), userrole);
}
