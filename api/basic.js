"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var basic_1 = require("../models/basic");
var router = express.Router();
router.post('/', function (req, res, next) {
    if (req.body._id === undefined) {
        var basic = new basic_1.default();
        basic.name = req.body.name;
        basic.date = req.body.date;
        basic.time = req.body.time;
        basic.user_tag = req.body.user_tag;
        basic.save(function (err, newBasic) {
            console.log(err);
            if (err) {
                return next(err);
            }
            res.json();
        }).catch(function (err) {
            res.status(500);
        });
    }
    else {
        basic_1.default.findByIdAndUpdate(req.body._id, { $set: { name: req.body.name, date: req.body.date, time: req.body.time } }, function (err, updatedBasic) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("RESULT: " + updatedBasic);
            }
        });
    }
    res.sendStatus(200);
});
exports.default = router;
