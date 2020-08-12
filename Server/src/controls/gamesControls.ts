import {Request, Response, json} from 'express';

import pool from '../databases';

import { connection } from '../databases';

class GamesControls{

    public async list (req: Request, res: Response) {
        await pool.query('SELECT * FROM games', function(err, juego, fields) {
            if (err) throw err;
            res.json(juego);
        });
    }

    public async getone(req:Request, res: Response): Promise<any> {
        const { id } = req.params;
        const juego = await pool.query('SELECT * FROM games WHERE id = ?', [id], function(err, juego, fields) {
            if (err) throw err;
            if(juego.length > 0){
                return res.json(juego[0]);
            };
            res.status(404).json({text: 'juego no encontrado'});  
        });
    }

    public async create (req: Request, res: Response):Promise <void> {
        await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({message: 'Juego guardado'});

        const Data = req.body;
        const id = String(Data.id);
        const title = String(Data.title);
        const description = String(Data.description);
        const image = String(Data.image);
        connection.Envio(id,title, description, image);
        
    }

    public async delete(req:Request, res:Response): Promise<void> {   
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id])
        res.json({message: 'Eliminando juego' + ' ' + req.params.id});
    }

    public async update (req:Request, res: Response){
        const {id} = req.params;
        await pool.query('UPDATE games set ? WHERE id = ?',[req.body, id]);
        res.json({message: 'Actualizando Juego' + ' ' + req.params.id});
    }
}

export const gamesControls = new GamesControls();