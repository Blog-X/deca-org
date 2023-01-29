import express from 'express';
import sbtRoutes from './routes/sbt.routes.js'

const router = express.Router();

router.use('/sbt', sbtRoutes);

export default router;