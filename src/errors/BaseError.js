class BaseError {
    constructor(code, message,errors = []) {
        this.code = code;
        this.message = message;
        this.errors = Array.isArray(errors) ? erros : [errors];
    }
}

export default BaseError;