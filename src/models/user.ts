import { DataTypes } from 'sequelize';
import db from '../db/connection';

const User = db.define('users', {
    username: {
        type: DataTypes.STRING
    },
    userpass: {
        type: DataTypes.STRING
    },
    userrole: {
        type: DataTypes.STRING
    },
    isActive: {
        type: DataTypes.BOOLEAN
    },
}, { underscored: true, createdAt: 'created_at', updatedAt: 'updated_at' });

export default User;
