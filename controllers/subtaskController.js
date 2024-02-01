const SubTask = require('../models/SubTask');
const Task = require('../models/Task');

exports.createSubTask = async (req, res) => {
    try {
        const { taskId } = req.body;
        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }
        if (task.userId.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        const newSubTask = new SubTask({
            ...req.body
        });

        const subTask = await newSubTask.save();
        res.json(subTask);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateSubTask = async (req, res) => {
    try {
        const subTask = await SubTask.findById(req.params.id);

        if (!subTask) return res.status(404).json({ msg: 'Subtask not found' });
        const task = await Task.findById(subTask.taskId);

        if (task.userId.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        const updatedSubTask = await SubTask.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.json(updatedSubTask);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getAllSubTasks = async (req, res) => {
    const { task_id } = req.query;
    let query = {};

    if (task_id) query.task_id = task_id;

    try {
        const subTasks = await SubTask.find(query);
        res.json(subTasks);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};
