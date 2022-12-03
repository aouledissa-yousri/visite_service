import { exit } from "process";
import { AppDataSource } from "./dataSource";

//initialize database connection 
AppDataSource.initialize().then(() => {
    console.log("Migration successful")
    exit()
}).catch(error => console.log(error))