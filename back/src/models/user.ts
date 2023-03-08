import { Model, DataTypes } from 'sequelize';
import db from "../db";

interface UserAttributes{
    id: typeof DataTypes.UUID,
    name: string,
    lastName: string,
}

interface UserInstance extends Model<UserAttributes>{}

const User = db.define<UserInstance>(
    'User',
    {
        id:{
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.UUID,
            unique: true
        },
        name:{
            allowNull: false,
            type: DataTypes.TEXT
        },
        lastName:{
            allowNull: false,
            type: DataTypes.TEXT
        }
    }
)

export default User;