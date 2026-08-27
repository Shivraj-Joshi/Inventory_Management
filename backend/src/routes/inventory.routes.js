import express from 'express';


const router = express.Router();


router.get('/api/inventory')
router.post('/api/inventory/receive')
router.post('/api/inventory/damage')
router.post('/api/inventory/adjust')
router.delete('api/inventory/:id')


export default router
