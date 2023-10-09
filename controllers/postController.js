const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Post = require("../models/Post");


exports.postById = (req, res, next, id) => {
    Post.findById(id).exec((err, post) => {
        if (err || !post) {
            return res.status(400).json({
                error: "Post not found"
            });
        }
        req.post = post;
        next();
    });
};


exports.read = (req, res) => {
    //req.post.photo = undefined;
    return res.json(req.post);
};


exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            });
        }
        // check for all fields
        const { name, description } = fields;

        if ( !name || !description ) {
            return res.status(400).json({
                error: "Missing required form fields"
            });
        }

        let post = new Post(fields);

        if (files.photo) {
            if (files.photo.size > 10000000) {
                return res.status(400).json({
                    error: "Image should be less than 1mb in size"
                });
            }
            post.photo.data = fs.readFileSync(files.photo.path);
            post.photo.contentType = files.photo.type;
        }

        post.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    });
};

exports.remove = (req, res) => {
    let post = req.post;
    post.remove((err, deletedPost) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: "Post deleted successfully"
        });
    });
};

exports.update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            });
        }
  

        let post = req.post;
        post = _.extend(post, fields);


        if (files.photo) {
            if (files.photo.size > 10000000) {
                return res.status(400).json({
                    error: "Image should be less than 1mb in size"
                });
            }
            post.photo.data = fs.readFileSync(files.photo.path);
            post.photo.contentType = files.photo.type;
        }

        post.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    });
};


exports.list = (req, res) => {
    //let order = req.query.order ? req.query.order : "asc";
    let order = req.query.order ? req.query.order : "desc";
    //let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let sortBy = req.query.sortBy ? req.query.sortBy : "projectdate";

    Post.find()
        .select("-photo")
        .sort([[sortBy, order]])
        .exec((err, posts) => {
            if (err) {
                return res.status(400).json({
                    error: "No posts found"
                });
            }
            res.json(posts);
        });
};

exports.photo = (req, res, next) => {
    if (req.post.photo.data) {
        res.set("Content-Type", req.post.photo.contentType);
        return res.send(req.post.photo.data);
    }
    next();
};

