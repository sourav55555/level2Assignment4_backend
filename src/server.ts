
import dotenv from 'dotenv'
dotenv.config()

import app from './app.js'
import { prisma } from './lib/prisma.js';

const PORT = process.env.PORT || 3000


async function main() {
  console.log(process.env.DATABASE_URL, 'db url')
  try {
    await prisma.$connect();
    console.log("DB connected successfully")
    app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
    
  } catch (e) {
    console.error(e)
  }
}

main()
