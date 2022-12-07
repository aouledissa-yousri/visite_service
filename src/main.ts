import express from "express"
import cors from "cors"
import { routes } from "./routes"
import { AppDataSource } from './dataSource';

const main = async () => {
    //building application
    const app = express()

    //hosts that are allowed to connect to the application
    const corsOptions = []

    app.use(express.json())
    app.use(cors(corsOptions))

    //detecting input server port
    let port = parseInt(process.argv[2])
    if(Number.isNaN(port)) port = 3000

    //main routes
    app.use("/", routes)
    

    //run express server
    app.listen(port, () => {
        //establish database connection 
        AppDataSource.initialize().then(() => {
            console.log("Application is running on http://localhost:"+port)
        }).catch(error => console.log(error))
    })
}

main()