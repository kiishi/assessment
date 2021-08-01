import { Action, Interceptor, InterceptorInterface } from "routing-controllers";
import { Service } from "typedi";


/**
 * This transforms the returning response to the form 
 * {
 *      code: 0,
 *      message: "Success",
 *      records: []
 * }
 */
@Interceptor()
@Service()
export class NameCorrectionInterceptor implements InterceptorInterface {
    intercept(action: Action, content: any) {
        return {
            code: 0,
            msg: "Success",
            records: content,
        };
    }
}
