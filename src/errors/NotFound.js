import BaseError from "./BaseError";
 class NotFound extends BaseError {
     constructor(errors){
     super(404, 'NotFound', errors);
    }
 }

 export default NotFound;