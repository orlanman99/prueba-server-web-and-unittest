"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const IndexControls_1 = require("../controls/IndexControls");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', IndexControls_1.indexControls.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
