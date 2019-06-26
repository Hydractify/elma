import { Client } from 'discord.js';
import { createConnection } from 'typeorm';
import { init as sentryInit } from '@sentry/node';

import { Logger } from './structures/Logger';
import { TimeoutError } from 'generic-pool/lib/errors';

/* eslint-disable @typescript-eslint/explicit-function-return-type */
process.on('unhandledRejection', (error: any) =>
{
	const promise: Promise<void> = Logger.instance.error('REJECTION', error);
	if (error instanceof TimeoutError) promise.then(() => process.exit(1));
});

// TODO: Figure out why linter was not finding the file through import
import { discordToken, sentryDSN } from '../data.json';

sentryInit
({
	dsn: sentryDSN,
});

// Creates a new Discord Client
const discordClient = new Client();

discordClient
	.login(discordToken)
	.catch((): undefined => undefined);

// Starts the database connection
createConnection
({
	database: 'elmaDatabase', // database's name
	type: 'sqlite',           // sqlite3 only
});
