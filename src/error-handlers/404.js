'use strict';

function notFoundError(req, res, next) {
    res.status(404).json({
        error: 404,
        route: req.path,
        message: "Resource Not Found"
    });
};


module.exports = notFoundError;