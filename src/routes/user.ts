import express, { Router } from 'express';
import { getData } from '../controller/user';

export const router: Router = express.Router();

// Get '/'
router.get('/', getData);