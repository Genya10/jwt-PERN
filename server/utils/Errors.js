class Error {
    constructor(status,error){
        this.status = status;
        this.error = error;
    }
}

export class Unprocessable extends Error {
    constructor(error){
        super(422,error);
    }
}

export class Conflict extends Error {
    constructor(error){
        super(409,error)
    }
}

export class NotFound extends Error {
    constructor(error){
        super(404,error)
    }
}

export class Forbidden extends Error {
    constructor(error){
        super(403,error)
    }
}

export class Unauthorized extends Error {
    constructor(error){
        super(401,error)
    }
}

export class BadRequest extends Error {
    constructor(error){
        super(400,error)
    }
}

export class ErrorUtils {
    static catchError(res,error){
        console.log(error);
        return res.status(error.status || 500).json(error);
    }
}