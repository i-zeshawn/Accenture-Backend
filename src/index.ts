import express, {Router} from 'express';
import PostgresDataSource from "./config/typeorm";
import {createConnection} from "typeorm";
import mainRouter from "./routes/mainRoutes";

const app = express();

app.use(express.json())
app.use('/', mainRouter)

let port = process.env.port || 3000
app.listen(port, async () => {
    console.log(`server is now running ${port}`);
    await createConnection(PostgresDataSource)
})
