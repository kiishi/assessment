import * as express from "express";
import {
    BadRequestError,
    ExpressErrorMiddlewareInterface,
    HttpError,
    Middleware,
} from "routing-controllers";
import { Service } from "typedi";

@Middleware({ type: "after" })
@Service()
export class ErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {


    // this resolves the error message that should be returned to the user
    private resolveErrorMessage(error: HttpError){
        if (error instanceof BadRequestError){
            return "Bad Payload"
        }
        return "An Unexpected error occurred"
    }

    public error(
        error: HttpError,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ): void {
        res.status(error.httpCode || 500);
        res.json({
            message: this.resolveErrorMessage(error),
            errors: error[`errors`] || [],
        });
    }
}
