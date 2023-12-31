"use strict";
/**
 * @file `importer.cts`
 *
 * From a require-style Node script, import cts and cts modules.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Import a module by `require()`ing it. If that results in
 * an error, return the error code.
 */
function requireModule(modulePath, exportName) {
    try {
        const imported = require(modulePath);
        return exportName ? imported[exportName] : imported;
    }
    catch (err) {
        return err.code;
    }
}
/**
 * CommonJS does not have top-level `await`, so we can wrap
 * everything in an `async` IIFE to make our lives a little easier.
 */
;
(async function () {
    console.log({
        title: 'Importing into a CommonJS module',
        // CJS<-CJS and MJS<-CJS are equivalent
        defaultCjsExport: requireModule('./exporter.cjs'),
        namedCjsExport: requireModule('./exporter.cjs', 'namedCjsExport'),
        // Cannot `require` an ESM module
        defaultMjsExportUsingRequire: requireModule('./exporter.mjs'),
        namedMjsExportUsingRequire: requireModule('./exporter.mjs', 'namedMjsExport'),
        defaultMjsExport: (await Promise.resolve().then(() => __importStar(require('./exporter.mjs')))).default,
        namedMjsExport: (await Promise.resolve().then(() => __importStar(require('./exporter.mjs')))).namedMjsExport,
    });
})();
