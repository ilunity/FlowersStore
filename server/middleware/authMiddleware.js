const jwt = require('jsonwebtoken');
const APIError = require('../error/APIError');

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        // if (!token) return res.status(401).json({message: "Не авторизован"});
        if (!token) next(APIError.unauthorized());

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (e) {
        next(APIError.unauthorized());
    }
};