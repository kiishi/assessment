import RecordService from "../../src/modules/record/record.service";
import record from "../../src/modules/record/model/record";

describe("RecordService", () => {
    let recordService: RecordService;
    beforeEach(() => {
        recordService = new RecordService();
    });
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("Should call model aggregation function properly for getRecord", async () => {
        record.aggregate = jest.fn().mockResolvedValue([
            {
                key: "abc",
                totalCount: 5000,
                createdAt: "2016-12-22T15:58:40.926Z",
            },
        ]);
        const payload = {
            startDate: "2016-05-31",
            endDate: "2021-05-31",
            minCount: 4000,
            maxCount: 6000,
        };
        await recordService.getRecord(payload);
        expect(record.aggregate).toHaveBeenCalledWith([
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
                    totalCount: {
                        $gte: payload.minCount,
                        $lte: payload.maxCount,
                    },
                    createdAt: {
                        $gte: payload.startDate,
                        $lte: payload.endDate,
                    },
                },
            },
        ]);
    });
});
