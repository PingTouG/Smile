import { Drash } from './deps.ts';
import resources from './resources/mod.ts';
import logger from './logger/mod.ts';

const server = new Drash.Http.Server({
    response_output:'application/json',
    resources,
    logger
})

server.run({
    hostname:'localhost',
    port: 3000
})

server.logger.info("Server Run At: http://localhost:3000")