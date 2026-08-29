import express from 'express';


const router = express.Router();


router.get('/api/suppliers')
router.get('/api/suppliers/:id')
router.post('/api/suppliers')
router.patch('/api/suppliers/:id')
router.delete('api/suppliers/:id')


export default router
