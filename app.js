import express from "express";
import bodyParser from "body-parser";
import conf from "config";
import router from "./routers/main_router.js";

const app = express();
const port = conf.get("port") || 5000;

app.use("/bootstrap", express.static("node_modules/bootstrap/dist/"));
app.use("/imask", express.static("node_modules/imask/dist"));
app.use(express.static("wwwroot"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});