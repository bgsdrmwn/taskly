import express from 'express';
import {
    signup
} from '../controller/auth.controler.js';
const router = expres.router();
router.post('/signup', signup);
export default router: