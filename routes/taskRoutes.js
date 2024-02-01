const express = require('express');
const { createTask, getTasks, updateTask,getAllTasks } = require('../controllers/taskController');
const authenticateToken = require('../middleware/authenticateToken');
const router = express.Router();


router.get('/', authenticateToken, getAllTasks);

router.post('/', authenticateToken, createTask);


router.get('/', authenticateToken, getTasks);


router.patch('/:id', authenticateToken, updateTask);

module.exports = router;
