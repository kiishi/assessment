import { IsNotEmpty, Matches } from "class-validator";

export class FetchRecordsByDateAndCountRequest {
    @IsNotEmpty()
    minCount: number;

    @IsNotEmpty()
    maxCount: number;

    @IsNotEmpty()
    @Matches(/^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/i, {
        message: "$property must be formatted as yyyy-mm-dd"
    })
    startDate: string | Date;

    @IsNotEmpty()
    @Matches(/^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/i, {
        message: "$property must be formatted as yyyy-mm-dd"
    })
    endDate: string | Date;
}
