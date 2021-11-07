import express from 'express'
import initializeRoutes from './startup/routes.js'
import initializeDb from './startup/db.js';
import dotenv from 'dotenv'



const app = express();
initializeRoutes(app);
initializeDb();
dotenv.config();



const port = process.env.PORT || 5000

app.listen(port, () => { console.log(`server running on port ${port}`) })