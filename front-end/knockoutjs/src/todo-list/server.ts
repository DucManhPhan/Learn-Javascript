import { app } from './config/express';
import { logger } from './config/logger';


logger.info('Running with Winston\n');

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    logger.info(`Server will start listening on port ${PORT}`);
});