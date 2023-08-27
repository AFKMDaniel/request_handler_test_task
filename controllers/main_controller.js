import { validationResult } from "express-validator";
import Request from "../models/request.js";
import conf from "config";
import bot from "../bot.js";

class MainController {
    get = (req ,res) => {
        res.render("index.ejs",{});
    }

    post = async (req, res) => {
        const result = validationResult(req);

        if(result.isEmpty()){
            try {
                const request = await Request.create({
                    paymentSystem: req.body.payment,
                    phoneNumber: req.body.phone,
                    sum: req.body.sum
                });

                conf.get("chat_ids").forEach(id => {
                    bot.sendMessage(id, `Номер заявки: ${request.id}\nПлатежная система: ${request.paymentSystem}\nНомер телефона: ${request.phoneNumber}\nСумма: ${request.sum} руб.`)
                })
            } 
            catch(e) {
                console.log(e);
            }
        }

        res.render("index.ejs", {});
    }
};

export default new MainController()