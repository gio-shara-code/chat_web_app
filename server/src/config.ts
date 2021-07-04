import dotenv from "dotenv"
dotenv.config()
if (!process.env.JWT_SECRET_KEY || !process.env.DB_PASSWORD) {
  console.log("JWT_SECRET_KEY || DB_PASSWORD is undefined in .env file")
  process.exit()
}

export default {
  jWTSecretKey: process.env.JWT_SECRET_KEY,
  port: process.env.PORT || 3000,
  db: {
    username: "crush-it-user",
    password: process.env.DB_PASSWORD,
    name: "chat-app-db",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  }
}
