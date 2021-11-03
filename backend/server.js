import express from 'express'
import initializeRoutes from './startup/routes.js'

const app = express();
initializeRoutes(app);



const port = process.env.PORT || 5000

app.listen(port, () => { console.log(`server running on port ${port}`) })