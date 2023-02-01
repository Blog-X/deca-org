import express from 'express';
import { addOrg } from "../controllers/org.controllers.js";

const router = express.Router();

router.post("/addOrg", addOrg);

export default router;