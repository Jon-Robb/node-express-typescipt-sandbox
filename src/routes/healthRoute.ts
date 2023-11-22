import express, { Request, Response } from 'express';

const heatlhRouter = express.Router();

heatlhRouter.get('/health', (req: Request, res: Response) => {
    res.send('Server is up and running');
});

export default heatlhRouter;