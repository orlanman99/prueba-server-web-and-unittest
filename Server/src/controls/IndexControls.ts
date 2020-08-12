import {Request, Response} from 'express';

class IndexControls{

    public index (req:Request, res:Response){
        res.send('Hello');
    }
}

export const indexControls = new IndexControls();