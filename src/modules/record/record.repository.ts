import { FetchRecordsByDateAndCountRequest } from "./dto/fetch-record.dto";
import record from "./model/record";


export const fetchRecordsByDateAndCount = async (
    payload: FetchRecordsByDateAndCountRequest
) => {
    return record.aggregate([
        {
            $project: {
                _id: 0,
                key: 1,
                createdAt: 1,
                totalCount: {
                    $sum: "$counts",
                },
            },
        },
        {
            $match: {
                totalCount: { $gte: payload.minCount , $lte: payload.maxCount },
                createdAt: { $gte: payload.startDate , $lte: payload.endDate }
            },
        },
    ]);
};
