import UserRepository from "../repositories/UserRepository"

export const getUserByUsername = async (username: string) => await UserRepository.getUserByUsername(username)