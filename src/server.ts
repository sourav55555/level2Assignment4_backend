import { prisma } from '../lib/prisma.js'
import app from './app.js'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000


async function main() {
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
