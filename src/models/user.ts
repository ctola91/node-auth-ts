import { DataTypes, Model } from 'sequelize';
import db from '../db/connection';

class User extends Model {
    declare username: string
    declare userpass: string
    declare userrole: string
    declare isActive: boolean
}

User.init({
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
},  { sequelize: db, tableName: 'users', underscored: true, createdAt: 'created_at', updatedAt: 'updated_at' })

export default User;
