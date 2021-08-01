import { Body, JsonController, Post } from "routing-controllers";
import { FetchRecordsByDateAndCountRequest } from "../modules/record/dto/fetch-record.dto";
import { Service } from "typedi";
import RecordService from "../modules/record/record.service";

@JsonController()
@Service()
export default class RecordController {
    constructor(
        private readonly recordService: RecordService
    ){}

    @Post("/get-records")
    async getRecords(@Body() body: FetchRecordsByDateAndCountRequest) {
        return this.recordService.getRecord(body)
    }
}
