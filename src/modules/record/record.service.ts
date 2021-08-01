import moment from "moment";
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
            throw error;
        }
    }
}
