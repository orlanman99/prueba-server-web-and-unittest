"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
const redis_1 = __importDefault(require("redis"));
const REDIS_PORT = process.env.PORT || '6379';
const client = redis_1.default.createClient(REDIS_PORT);
class Connection {
    Envio(id, title, description, image) {
        client.hmset(id, {
            'Title': title,
            'Description': description,
            'Image': image
        }, (err, reply) => {
            if (err) {
                console.error(err);
            }
            else {
                console.log(reply);
            }
        });
    }
    Recibido() {
        client.get('rojs');
    }
    delete() {
        client.del('rojs');
    }
}
exports.connection = new Connection();
const pool = mysql_1.default.createPool(keys_1.default.databases);
pool.getConnection((err, connection) => {
    if (err)
        throw err;
    connection.release();
    console.log('DB is connected');
});
exports.default = pool;
