import BaseError from "./BaseError";
 class Unauthorized extends BaseError {
     constructor(errors){
     super(401, 'Unauthorized', errors);
    }
 }

 export default Unauthorized;