import { DataTypes } from 'sequelize';
import db from '../db/connection';

const User = db.define('User', {
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    isActive: {
        type: DataTypes.BOOLEAN
    }
});

export default User;
