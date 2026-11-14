import express from 'express';
import { type Express} from 'express';
import cors from 'cors';
import router from './routes.js';

class App {
    public server: Express;

    constructor (){
        this.server = express();
        this.router();
        this.middleares();
    }

    private router(): void {
        this.server.use("/Pontualiza/v1",router);
    }

    private middleares(): void{
        this.server.use(cors());
        this.server.use(express.json());
    }
}

export default new App().server;
