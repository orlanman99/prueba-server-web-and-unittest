"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesControls = void 0;
const databases_1 = __importDefault(require("../databases"));
const databases_2 = require("../databases");
class GamesControls {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield databases_1.default.query('SELECT * FROM games', function (err, juego, fields) {
                if (err)
                    throw err;
                res.json(juego);
            });
        });
    }
    getone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const juego = yield databases_1.default.query('SELECT * FROM games WHERE id = ?', [id], function (err, juego, fields) {
                if (err)
                    throw err;
                if (juego.length > 0) {
                    return res.json(juego[0]);
                }
                ;
                res.status(404).json({ text: 'juego no encontrado' });
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield databases_1.default.query('INSERT INTO games set ?', [req.body]);
            res.json({ message: 'Juego guardado' });
            const Data = req.body;
            const id = String(Data.id);
            const title = String(Data.title);
            const description = String(Data.description);
            const image = String(Data.image);
            databases_2.connection.Envio(id, title, description, image);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield databases_1.default.query('DELETE FROM games WHERE id = ?', [id]);
            res.json({ message: 'Eliminando juego' + ' ' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield databases_1.default.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Actualizando Juego' + ' ' + req.params.id });
        });
    }
}
exports.gamesControls = new GamesControls();
