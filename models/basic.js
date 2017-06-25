"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var BasicSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 2,
        max: 50,
        uppercase: true
    }
});
exports.default = mongoose.model('Basic', BasicSchema);
