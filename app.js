require("dotenv").config()

const express = require("express")
const cors = require("cors")

const connectDB = require("./config/db")
const productRoutes = require("./routes/productRoutes")

const app = express()

// Connect Database
connectDB()

// Middlewares
app.use(express.json())
app.use(cors())

// Test route
app.get("/", (req, res) => {
    res.send("AI Sustainable Commerce API Running")
})

// API routes
app.use("/api", productRoutes)

// Server start
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})