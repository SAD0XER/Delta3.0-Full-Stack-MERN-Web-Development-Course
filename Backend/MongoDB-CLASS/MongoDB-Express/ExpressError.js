class ExpressError extends Error {
    constructor(status, message) {
        super(); // calling the constructor of the parent class.
        this.status = status;
        this.message = message;
    }
}
module.exports = ExpressError;
