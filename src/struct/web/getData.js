import { QuickDB } from "quick.db";
import { URL } from "url";

const db = new QuickDB();

const api = {
    name: 'api/get',
    run: async (req, res, server) => {
        if (!req.query && req.query.name)
            res.send('Error: No project name');

        const key = req.url.substring(14);

        const obj = await db.get(key);

        res.json(obj);
    }
}

export default api;
