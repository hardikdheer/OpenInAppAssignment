const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    try {
        const newTask = new Task({
            ...req.body,
            userId: req.user.id
        });
        const task = await newTask.save();
        res.json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id }).sort({ date: -1 });
        res.json(tasks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) return res.status(404).json({ msg: 'Task not found' });
        if (task.userId.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        const updatedTask = await Task.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.json(updatedTask);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
