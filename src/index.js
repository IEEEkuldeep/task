import express from 'express';
import bodyParser from 'body-parser';

import loadTaskRouter from './app/task/taskRouters';
import mongoose from 'mongoose';
import loadUserRouter from './app/user/userRouters';

const app = express();

app.use(bodyParser.json())
const PORT = process.env.PORT || 1200;
const CONNECTION_URL = 'mongodb://127.0.0.1:27017/tasks';

app.get('/', async (req, res) => {
    res.json({ status: true, message: "Our node.js app works" })
});

loadTaskRouter(app);
loadUserRouter(app);    
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => {
 console.log(error.message);
});
