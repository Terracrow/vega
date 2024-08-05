/**
 * VEGA -- Discord integration maker
 * https://github.com/Terracrow/vega
 * ---------------------------------
 * using electron / discord.js v14
 */

import Server from "./struct/Server.js";
import Window from "./struct/Window.js";
import { URL } from 'url';
import bodyParser from "body-parser";

const __filename = new URL('', import.meta.url).pathname;
const __dirname = new URL('.', import.meta.url).pathname;

const win = new Window();

const server = new Server(8080);

server.on('app-launched', (app) => {
    server.app.use(bodyParser.urlencoded({ extended: true }));

    console.log(`[SERVER] Launched at ${server.port}`);

    server.initHandler();

    server.app.get('/', (req, res) => {
        res.sendFile(__dirname.substring(3) + '/struct/front/index.html');
    });
});

server.connect();
