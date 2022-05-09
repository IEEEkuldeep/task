const asyncErrorHandler = (func) =>  async (req, res, next) => {
    try {
        await func(req, res, next);
    } catch (err) {
        return next(err);
    }
}

export default asyncErrorHandler;