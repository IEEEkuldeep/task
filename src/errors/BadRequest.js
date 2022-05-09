import BaseError from "./BaseError";
 class BadRequest extends BaseError {
     constructor(errors) {
         super(400, 'BadRequest', errors);
     }
 }

 export default BadRequest;