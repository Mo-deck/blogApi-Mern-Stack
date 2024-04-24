import express from "express";
import { port } from "./config/config.js";
import connectDb from "./config/db.js";

import chalk from "chalk";
// import { hellWorld } from "./controllers/userController.js";
import { registerUser } from "./controllers/userController.js";
import { loginUser } from "./controllers/postsController.js";

const PORT = port || 3000

const app = express()
app.use(express.json())


app.use('/api/v1/users',registerUser)
app.use('/api/v1/posts' , loginUser)

connectDb()

app.listen(PORT, () => console.log(`${chalk.green.bold('Server')} is Running on port  ${chalk.green.bold(PORT)}`))