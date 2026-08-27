import express from 'express';


const router = express.Router();


router.get('/api/products')
router.get('/api/products/:id')
router.post('/api/products')
router.patch('/api/products/:id')
router.delete('api/product/:id')


export default router
