import BaseError from "./BaseError";
 class InternalServerError extends BaseError {
     constructor(errors){
     super(500, 'InternalServerError', errors);
    }
 }

 export default InternalServerError;