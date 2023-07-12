import mongoose, { Schema } from "mongoose";

const brandSchema = new Schema(
  {
    brand_id: String,
    name: String,
  },
  {
    timestamps: true,
  }
);

const Brand = mongoose.models.Brand || mongoose.model("Brand", brandSchema);

export default Brand;
