import express from 'express';
import sbtRoutes from './routes/sbt.routes.js'
import roomRoutes from './routes/room.routes.js'
import orgRoutes from './routes/org.routes.js'

const router = express.Router();

router.use('/sbt', sbtRoutes);
router.use('/room', roomRoutes);
router.use('/org', orgRoutes);

export default router;