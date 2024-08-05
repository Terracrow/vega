import express from 'express';
import { EventEmitter } from 'events';
import ServerHandler from './ServerHandler.js';
import { join } from 'path';

class Server extends EventEmitter {
    constructor(port) {
        super();
        this.port = port;
    }

    connect = () => {
        const app = express();

        this.app = app;

        app.listen(this.port);

        this.emit('app-launched', app);

        this.app.get('/api/create', (req, res) => {
            res.send('Client created.');
        });
    }

    initHandler = () => {
        return new ServerHandler('./src/struct/web/', this.app);
    }
}

export default Server;
