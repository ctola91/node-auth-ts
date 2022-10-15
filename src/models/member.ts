import { DataTypes } from 'sequelize';
import db from '../db/connection';
import User from './user';

const Member = db.define('members', {
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    memberType: {
        type: DataTypes.ENUM({
            values: ['premium', 'basic', 'guest'],
        }),
        defaultValue: 'guest',
        allowNull: false
    },
}, { underscored: true, createdAt: 'created_at', updatedAt: 'updated_at' });

Member.hasOne(User, {
    foreignKey: {
        name: 'userId'
    }
});
export default Member;
