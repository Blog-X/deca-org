import express from 'express';
import { addParticipant, getParticipants } from '../controllers/room.controller.js';

const router = express.Router();

router.post('/addPeer', addParticipant);
router.post('/getPeers', getParticipants);

export default router;
