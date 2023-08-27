import { Sequelize } from "sequelize";
import conf from "config";

const sequelize = new Sequelize(conf.get("database"), conf.get("user"), conf.get("password"), {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false
    }
  });

export default sequelize

