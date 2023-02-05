"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var CRUD = require("./crud.js");
var row = {
    firstName: 'Guillame',
    lastName: 'Salva'
};
var newRowID = CRUD.insertRow(row);
var updateRow = __assign({ age: 23 }, row);
CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);
