"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControls_1 = require("../controls/gamesControls");
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamesControls_1.gamesControls.list);
        this.router.get('/:id', gamesControls_1.gamesControls.getone);
        this.router.post('/', gamesControls_1.gamesControls.create);
        this.router.delete('/:id', gamesControls_1.gamesControls.delete);
        this.router.put('/:id', gamesControls_1.gamesControls.update);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
