import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
