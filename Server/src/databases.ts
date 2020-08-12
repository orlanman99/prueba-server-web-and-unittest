import mysql from 'mysql';
import keys from './keys';


import redis from 'redis';
const REDIS_PORT = process.env.PORT ||'6379';
const client = redis.createClient(REDIS_PORT);

class Connection{

    public Envio(id:string,title:string, description:string, image:string ){
        client.hmset(id, {
            'Title' : title,
            'Description': description,
            'Image' : image}, (err, reply) => {
            if(err) {
              console.error(err);
            } else {
              console.log(reply);
            }
        });
    }

    public Recibido(){
        client.get('rojs');
    }

    public delete(){
        client.del('rojs');
    }

}

export const connection = new Connection();


const pool = mysql.createPool(keys.databases);

pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.release();
    console.log('DB is connected');
});

export default pool;    