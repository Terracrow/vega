import DiscordBot from '../djs/Client.js';
import bodyParser from 'body-parser';
import quickdb from 'quick.db';

const db = new quickdb.QuickDB();

const api = {
    name: 'log',
    run: async (req, res, server) => {

        server.use(bodyParser.urlencoded({ extended: true }));

        const key = req.url.substring(11);

        try {
            const Bot = new DiscordBot(key);
        } catch (e) {
            res.send('An error has occured during creating the bot, please contact us on Discord to get support.' + e);
        }
    }
}

export default api;
