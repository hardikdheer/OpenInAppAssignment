require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const{connectMongoDb}=require("./config/db")


const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const subtaskRoutes = require('./routes/subtaskRoutes');


require('./cron/priorityAdjustment');
require('./cron/overdueTaskCaller');


const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 8000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


connectMongoDb("mongodb://127.0.0.1:27017/my-database").then(() => console.log("MongoDB connected"))



app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/subtasks', subtaskRoutes);


app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
