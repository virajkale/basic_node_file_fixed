const globalErrHandler = (err, req, res, next) => {
    //status
    //message
    //stack
    const stack = err.stack;
    const message = err.message;
    const status = err.status ? err.status : "failed";
    const statusCode = err.statusCode ? err.statusCode : 500;
    if (process.env.NODE_MODE === "DEVELOPMENT") {
      res.status(statusCode).json({
        stack,
        message,
        status,
      });
    }
    if (process.env.NODE_MODE === "PRODUCTION") {
      res.status(statusCode).json({
        message,
        status,
      });
    }
  
  };
  
  //Not found
  const notFoundErr = (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl} on the server`);
    next(err);
  };
  
  module.exports = { globalErrHandler, notFoundErr };
  