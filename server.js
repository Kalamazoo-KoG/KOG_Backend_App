const express = require('express');
const dotenv = require('dotenv');
const { connectDB, sequelize } = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5500; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
