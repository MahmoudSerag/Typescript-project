"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./routes/user");
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(user_1.router);
app.listen(port, () => {
    console.log(`Server is lestening on port: ${port}`);
});
