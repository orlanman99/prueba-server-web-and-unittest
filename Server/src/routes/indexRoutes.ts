import { Router } from 'express';

import { indexControls} from '../controls/IndexControls'
class IndexRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',indexControls.index );
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;