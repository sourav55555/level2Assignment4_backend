import express from 'express'
import cors from 'cors'
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth.js';


const app = express()

app.use(cors({
    origin: process.env.APP_URL || "http://localhost:4000",
    credentials: true
}))

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Server is running' })
})

export default app
