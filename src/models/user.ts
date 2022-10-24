import { DataTypes, Model } from 'sequelize';
import db from '../db/connection';

class User extends Model {
    declare email: string
    declare password: string
    declare firstName: string
    declare lastName: string
    declare role: string
    declare isActive: boolean
}

User.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'pass'
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'firstname'
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'lastname'
    },
    role: {
        type: DataTypes.ENUM,
        values: ["USER_ROLE", "ADMIN_ROLE", "PREMIUM_ROLE"],
        defaultValue: "USER_ROLE",
        field: 'user_role'
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
}, { sequelize: db, tableName: 'users', underscored: true, createdAt: 'created_at', updatedAt: 'updated_at' })

export default User;
