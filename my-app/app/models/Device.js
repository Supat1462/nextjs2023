import mongoose, { Schema } from "mongoose";

const deviceSchema = new Schema(
  {
    name: String,
    serail: String,
    disc: String,
    brand: String,
    category: String,
    startDate: Date,
    endDate: Date,
    status: String,
    price: Number,
  },
  {
    timestamps: true,
  }
);

const Device = mongoose.models.Device || mongoose.model("Device", deviceSchema);

export default Device;
