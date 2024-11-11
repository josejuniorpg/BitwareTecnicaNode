import { Router } from 'express';
import { uploadCSV } from '../controllers/userController';

const router = Router();

router.get('/upload', uploadCSV);

export default router;
