const cron = require('node-cron');
const Task = require('../models/Task');

const adjustTaskPriorities = async () => {
    console.log('Running Priority Adjustment Job');
    const tasks = await Task.find({ deleted_at: null }); 

    tasks.forEach(async (task) => {
        const dueDate = new Date(task.due_date);
        const today = new Date();
        const diffTime = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
        let newPriority;

        if (diffTime < 1) newPriority = 0; // Due today or overdue
        else if (diffTime <= 2) newPriority = 1; // Due within next 2 days
        else if (diffTime <= 4) newPriority = 2; // Due within next 3-4 days
        else newPriority = 3; // Due in 5 or more days

        await Task.findByIdAndUpdate(task._id, { priority: newPriority });
    });
};

// Schedule the job to run at midnight every day
cron.schedule('0 0 * * *', adjustTaskPriorities);
