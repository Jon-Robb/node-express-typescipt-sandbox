import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server Hiyaaaa!!');
});

app.get('/health', (req: Request, res: Response) => {
    res.send('Server is healthy');
});

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});