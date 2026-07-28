import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware } from '@clerk/express'

const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(clerkMiddleware());
app.use(express.json({limit: "20mb"}));
app.use(express.urlencoded({limit: "20mb", extended: true}));

// Database

// Routes

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})