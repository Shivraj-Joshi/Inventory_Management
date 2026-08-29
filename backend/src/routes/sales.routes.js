import express from 'express';


const router = express.Router();


router.get('/api/sales')
router.get('/api/sales/:id')
router.patch('/api/sales/:id')
router.post('/api/sales')


export default router
