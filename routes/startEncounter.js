// routes/startEncounter.js
import { Router } from 'express';
const router = Router();
import { startEncounter } from '../controllers/startEncounter';

router.post('/', startEncounter);

export default router;
