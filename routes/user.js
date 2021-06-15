import express from 'express'
import { getUsers, createUsers, deleteUsers } from '../controllers/user.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/create', createUsers);
router.delete('/:id', deleteUsers);

export default router;