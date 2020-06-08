"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
exports.errorHandler = function (err, req, res, next) {
    if (err) {
        res.status(400).send(err.message);
    }
    next();
};
