'use strict';

function errorHandler(err, req, res, next) {
    res.status(500).json({
        code:500,
        err: err,
        message: `internal server error : ${err.message}`,
        path: req.path,
        query: req.query
    });
};

module.exports = errorHandler;