import express from 'express';


const router = express.Router();


router.get('/api/users')
router.get('/api/users/:id')
router.post('/api/users')
router.patch('/api/users/:id')
router.delete('api/users/:id')


export default router
