import express from 'express';


const router = express.Router();


router.get('/api/customers')
router.post('/api/customers')
router.patch('/api/customers/:id')


export default router
