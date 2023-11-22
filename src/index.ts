import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import heatlhRouter from './routes/healthRoute';
import countryRouter from './routes/countryRoute';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server Hiyaaaa!!');
});


app.use(heatlhRouter)
app.use(countryRouter)

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});

