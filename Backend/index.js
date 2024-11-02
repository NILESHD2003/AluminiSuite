const express = require('express');
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const PORT = process.env.PORT || 3000;

// Database Connection
require('./Config/database.config').connect();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
); // Enable CORS for all routes
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.get('/status', (req, res)=>{
    res.status(200).json({
        success: true,
        message: 'Server is running'
    });
});

// Routes
app.use('/api/v1/auth', require('./Routes/Authentication.Route'));

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
