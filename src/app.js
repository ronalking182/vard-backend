const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

const authRoutes = require('./routes/authRoutes');
// const candidateRoutes = require('./routes/candidateRoutes');
// const recruiterRoutes = require('./routes/recruiterRoutes');
// const resumeRoutes = require('./routes/resumeRoutes');
// const githubRoutes = require('./routes/githubRoutes');
// const matchRoutes = require('./routes/matchRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
// app.use('/api/candidates', require('./routes/candidateRoutes'));
// app.use('/api/recruiters', require('./routes/recruiterRoutes'));
// app.use('/api/resumes', require('./routes/resumeRoutes'));
// app.use('/api/github', require('./routes/githubRoutes'));
// app.use('/api/match', require('./routes/matchRoutes'));



module.exports = app;
