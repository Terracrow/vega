import { readdirSync } from 'fs';
import { join } from 'node:path';

class ServerHandler {
    constructor(path, server) {
        (async () => {
            const files = readdirSync(path).filter((f) => f.endsWith('.js'));

            for (const file of files) {
                const { default: cmd } = await import(`./web/${file}`);

                try {

                    if (cmd.method == 'post')
                        server.post(`/${cmd.name}`, (req, res) => cmd.run(req, res, server));
                    else {
                        server.get(`/${cmd.name}`, (req, res) => {
                            cmd.run(req, res, server);
                        });
                    }
                    console.log(`[SERVER] ${cmd.name} initialized`);
                } catch (e) {
                    console.error(e);
                }
            }
        })();
    }
}


export default ServerHandler;
