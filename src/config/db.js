import mongoose from "mongoose";
import { dbURL } from "./config.js";
import chalk from "chalk";

const connectDb = async() =>{
    try{

       await mongoose.connect(dbURL)

        console.log(`${chalk.green.bold('Connect')} to Database ${chalk.blue.bold('Successfully')}`)

    }catch(err){
        console.log(`${chalk.red.bold('Error')} Connect to Database`,err)
        process.exit(1)
    }
}

export default connectDb;