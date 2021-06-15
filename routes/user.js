import express from 'express'
import { getUsers, createUsers, deleteUsers } from '../controllers/user.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect(getUsers);
});
router.post('/', (req, res) => {
    res.redirect(createUsers);
});
router.delete('/', (req, res) => {
    res.redirect(deleteUsers);
});

export default router;