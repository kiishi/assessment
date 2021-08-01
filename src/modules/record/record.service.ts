import moment from "moment";
import { InternalServerError } from "routing-controllers";
import logger from "../../utils/logger";
import { Service } from "typedi";
import { FetchRecordsByDateAndCountRequest } from "./dto/fetch-record.dto";
import { fetchRecordsByDateAndCount } from "./record.repository";

@Service()
export default class RecordService {
    async getRecord(payload: FetchRecordsByDateAndCountRequest) {
        try {
            payload.endDate = moment(payload.endDate , 'YYYY-MM-DD').toDate()
            payload.startDate = moment(payload.startDate, 'YYYY-MM-DD').toDate()
            const data = await fetchRecordsByDateAndCount(payload);
            return data;
        } catch (error) {
            logger.error("Unknown error fetching records at this time" + error.message)
            throw new InternalServerError("An unknown error occurred");
        }
    }
}
