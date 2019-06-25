import { Client } from 'discord.js';
import { createConnection } from 'typeorm';

// Creates a new Discord Client
const discordClient = new Client();

// TODO: Figure out why linter was not finding the file through import
const { discordToken } = require('../data.json');
discordClient
	.login(discordToken)
	.catch(() => undefined);

discordClient.on('ready', () => process.stdout.write('Bot is on'));

process.on('unhandledRejection', (error) => process.stderr.write(error!.toString()));

// Starts the database connection
createConnection
({
	database: 'elmaDatabase', // database's name
	type: 'sqlite',           // sqlite3 only
})
	.then(() => process.stdout.write('[DATABASE] Ready.'));
