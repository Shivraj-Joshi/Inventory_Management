import express from 'express';


const router = express.Router();


router.get('/api/inventory')
router.post('/api/inventory/receive')
router.patch('/api/inventory/damage')



export default router
