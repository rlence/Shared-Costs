import { Sequelize, Options } from "sequelize";
import Environment from "./config";

const { POSTGRES_DATABASE, POSTGRES_PASSWORD,POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER } = Environment;

const config: Options = {
    host:POSTGRES_HOST || "localhost",
    dialect: 'postgres',
    port: POSTGRES_PORT,
    pool: {
      max: 5,
      min: 0,
      idle: 1000
    }
}

const db = new Sequelize(POSTGRES_DATABASE, POSTGRES_USER, POSTGRES_PASSWORD ,config);

export default db;