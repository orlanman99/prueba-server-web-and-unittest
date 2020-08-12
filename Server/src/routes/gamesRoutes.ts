import { Router } from 'express';

import {gamesControls} from '../controls/gamesControls' 
class GamesRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',gamesControls.list);
        this.router.get('/:id',gamesControls.getone);
        this.router.post('/',gamesControls.create);
        this.router.delete('/:id',gamesControls.delete);
        this.router.put('/:id', gamesControls.update);
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;