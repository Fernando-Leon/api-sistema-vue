const express = require("express")
const cors = require('cors');
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

require("dotenv").config()
const providerRoutes = require("./routes/provider");
const entidadRoutes = require('./routes/entidad');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());;
app.use(bodyParser.json());
const port = process.env.PORT || 9000;

// Middleware

app.use(express.json());
app.use('/api', providerRoutes);
app.use('/api', entidadRoutes);
app.use('/api', userRoutes);
app.use('/api', authRoutes);

// Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
})

//MongoDB connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))

app.listen(port, () => {
    console.log("Server is running on port", port)
});