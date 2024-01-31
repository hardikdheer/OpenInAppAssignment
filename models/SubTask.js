const mongoose = require('mongoose');

const subTaskSchema = new mongoose.Schema({
    task_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
    status: { type: Number, required: true, enum: [0, 1] }, // 0 for incomplete, 1 for complete
    deleted_at: { type: Date, default: null }
}, { timestamps: true });

const SubTask = mongoose.model('SubTask', subTaskSchema);

module.exports = SubTask;
