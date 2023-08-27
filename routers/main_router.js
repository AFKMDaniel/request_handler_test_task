import express from "express";
import mainController from "../controllers/main_controller.js";
import { body } from "express-validator";

const router = express.Router();

router.get("/", mainController.get);

router.post("/", 
    body("payment").custom(value => {
        if(value !== "QIWI" && value !== "Мир")
            throw new Error("Incorrect payment system")
        return true;
    }),
    body("phone").matches("\\+7\\([0-9]{3}\\)[0-9]{3}-[0-9]{2}-[0-9]{2}"),
    body("sum").isFloat({min: 0}),
    mainController.post)

export default router