const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const About = require("../models/About");


exports.aboutById = (req, res, next, id) => {
    About.findById(id).exec((err, about) => {
        if (err || !about) {
            return res.status(400).json({
                error: "Post not found"
            });
        }
        req.about = about;
        next();
    });
};


exports.read = (req, res) => {
    return res.json(req.about);
};




exports.update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Description could not be updated"
            });
        }


        about.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    });
};


exports.photo = (req, res, next) => {
    if (req.post.photo.data) {
        res.set("Content-Type", req.post.photo.contentType);
        return res.send(req.post.photo.data);
    }
    next();
};

