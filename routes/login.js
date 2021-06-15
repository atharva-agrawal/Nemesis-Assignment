import express from 'express'
import { userLogin } from '../controllers/userLogin.js';

const router = express.Router();

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
    // Split at the space
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

router.post('/', verifyToken, userLogin);

export default router;