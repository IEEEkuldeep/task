import BaseError from "../errors/BaseError";
export default (err, res, next) => {

    if (err instanceof BaseError) {
        res.status(err.code).json({
            status: err.code,
            message: err.errors[0],
        });
    }
    else {
        res.status(500).json({
            status: 500,
            message: ' Oh Snap! Our Serviec is not working.....'
        });
    }
};