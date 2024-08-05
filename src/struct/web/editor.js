import { QuickDB } from "quick.db";
import { URL } from "url";
import { readFileSync } from "fs";

const __filename = new URL('', import.meta.url).pathname;
const __dirname = new URL('.', import.meta.url).pathname;

const db = new QuickDB();

const api = {
    name: 'editor',
    run: async (req, res, server) => {
        if (!req.query && req.query.name)
            res.send('Error: No project name');

        res.sendFile(__dirname.substring(3) + '/webFiles/index.html');
    }
}

export default api;
