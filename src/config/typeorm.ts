import {ConnectionOptions, DataSource} from "typeorm";
import {Cms} from "../cms/models/cms";

let PostgresDataSource: ConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "accenture",
    entities: [Cms],
    synchronize: true,
    logging: false
};

export default PostgresDataSource
