import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/index.js';
import { errorHandler } from './utils/errorHandler.js';

const app = express();

// Global Middlewares
app.use(cors());
app.use(express.json());

// Main Entry Routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Nexus API Authority - Protocol Active');
});

// Post-Processing Middleware
app.use(errorHandler);

export default app;
