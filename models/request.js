import { DataTypes } from "sequelize";
import sequelize  from "../db.js";

const Request = sequelize.define("Request", {
    paymentSystem: {
        type: DataTypes.STRING,
        allownull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allownull: false
    },
    sum: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

Request.sync();

export default Request