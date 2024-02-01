const cron = require('node-cron');
const Task = require('../models/Task');
const User = require('../models/User');
const { client,phoneNumber } = require('../config/twilioconfig.js');

const callUsersWithOverdueTasks = async () => {
    console.log('Running Overdue Task Caller Job');
    const today = new Date();
    const overdueTasks = await Task.find({
        due_date: { $lt: today },
        status: { $ne: 'DONE' },
        deleted_at: null
    }).populate('userId');

    for (const task of overdueTasks) {
        const user = await User.findById(task.userId);
        if (!user || !user.phone_number) continue;

        try {
            await client.calls.create({
                to: user.phone_number,
                from: phoneNumber,
                url: 'https://api.twilio.com/cowbell.mp3'
            });
            console.log(`Call initiated to ${user.phone_number}`);
        } catch (error) {
            console.error(`Failed to call ${user.phone_number}: ${error.message}`);
        }
    }
};

// Schedule the job to run at 9 AM every day
cron.schedule('0 9 * * *', callUsersWithOverdueTasks);
