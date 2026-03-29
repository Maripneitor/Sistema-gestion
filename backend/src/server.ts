import app from './app.js';
import { config } from './config/index.js';

const startServer = () => {
  try {
    app.listen(config.port, () => {
      console.log(`
      🚀 Nexus Authority Server Primed
      📡 Link established at: http://localhost:${config.port}
      🛡️ Environment: ${config.env.toUpperCase()}
      `);
    });
  } catch (error) {
    console.error('CRITICAL INITIALIZATION ERROR:', error);
    process.exit(1);
  }
};

startServer();
