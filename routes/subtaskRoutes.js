const express = require('express');
const { createSubTask, updateSubTask } = require('../controllers/subtaskController');
const authenticateToken = require('../middleware/authenticateToken');
const router = express.Router();


router.post('/', authenticateToken, createSubTask);


router.patch('/:id', authenticateToken, updateSubTask);

module.exports = router;
