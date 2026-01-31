import express from 'express'
import cors from 'cors'
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth.js';
import { notFound } from './lib/notFound.js';
import providerRouter from './models/providers/providers.routes.js'
import mealRouter from './models/meal/meal.router.js'
import cuisineRouter from './models/cuisine/cuisine.route.js'


const app = express()

const allowedOrigins = [process.env.APP_URL || "http://localhost:4000"];

app.use(express.json());
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.all("/api/auth/*splat", toNodeHandler(auth));


app.get('/', (req, res) => {
  res.json({ message: 'Server is running' })
})
app.use("/provider", providerRouter)
app.use("/meals", mealRouter)
app.use("/cuisine", cuisineRouter)

app.use(notFound)


export default app
