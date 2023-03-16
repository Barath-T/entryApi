"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const info = (...args) => {
    console.log("INFO: ", ...args);
};
const error = (...args) => {
    console.log("ERROR: ", ...args);
};
const loggerFuncs = { info, error };
exports.default = loggerFuncs;
//# sourceMappingURL=logger.js.map