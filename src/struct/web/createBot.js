import DiscordBot from '../djs/Client.js';
import bodyParser from 'body-parser';
import quickdb from 'quick.db';

const db = new quickdb.QuickDB();

const api = {
    name: 'api/new',
    run: async (req, res, server) => {

        server.use(bodyParser.urlencoded({ extended: true }));

        try {
            await db.set(req.query.name, req.query);

            res.redirect(`/editor?name=${req.query.name}`);
        } catch (e) {
            res.send('An error has occured during creating the bot, please contact us on Discord to get support.' + e);
        }
    }
}

export default api;
