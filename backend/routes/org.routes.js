import express from 'express';
import { addOrg, getOrg } from "../controllers/org.controllers.js";

const router = express.Router();

router.post("/addOrg", addOrg);
router.post("/getOrg", getOrg);

export default router;