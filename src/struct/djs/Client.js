import { Client, Partials } from "discord.js";

class DiscordBot extends Client {
    constructor(token) {
        super({
            intents: 3276799,
            partials: [
                Partials.Channel,
                Partials.GuildMember,
                Partials.Message,
                Partials.User,
                Partials.Reaction
            ]
        });

        this.on('ready', () => {
            console.log(`[BOT] ${this.user.globalName} connected.`);
        });

        this.login(token);
    }
}

export default DiscordBot;
