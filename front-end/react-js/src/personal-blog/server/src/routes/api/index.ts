// File routes/api/index.ts will register all router for our system's apis

import express from 'express';

const router = express.Router();

router.use('/articles', require('./articles'));

module.exports = router;