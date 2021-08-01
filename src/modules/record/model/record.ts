import mongoose, { Schema, Document } from "mongoose";

export interface IRecord extends Document {
    key: string;
    value: string;
    count: Array<number>;
    createdAt: Date;
}

const RecordSchema: Schema = new Schema({
    key: { type: String },
    value: { type: String },
    createdAt: { type: Schema.Types.Date},
    counts: { type: Schema.Types.Array}
});

export default mongoose.model<IRecord>("records", RecordSchema);
