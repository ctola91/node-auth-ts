import { Sequelize } from "sequelize";

const DB_HOST: string = process.env.DB_HOST || 'db';
const DB_USER: string = process.env.DB_USER || 'postgres';
const DB_NAME: string = process.env.DB_NAME || 'authdb';
const DB_PASSWORD: string = process.env.DB_PASSWORD || 'authdbpass';
const DB_PORT: string = process.env.DB_PORT || '5432';

console.log(DB_NAME, DB_USER, DB_PASSWORD, DB_HOST);
const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres',
    port: parseInt(DB_PORT)
    // logging: false
});
// const db = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);

export default db;