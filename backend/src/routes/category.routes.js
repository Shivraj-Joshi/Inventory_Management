import express from 'express';


const router = express.Router();


router.get('/api/category')
router.post('/api/category')
router.patch('/api/category/:id')
router.delete('api/category/:id')


export default router
