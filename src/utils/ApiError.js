this.data = null
class ApiError extends Error {
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        statck = ''
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.success = null
        this.errors = errors

        if (statck) {
            this.stack = statck
        }else{
            Error.captureStackTrace(this , this.constructor)
        }
    }
}

export {ApiError}