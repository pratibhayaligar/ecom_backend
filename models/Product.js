const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Tile must be at least 3 characters"],
    },
    price: {
      type: String,
      required: [true, "Price is required"],
      min: [0, "Price must be a positive number"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [10, "Description must be at least 10 characters"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
      eum: ["men's clothing", "women's clothing", "electronics", "jewelery"],
    },
    image: {
      type: String,
      required: [true, "image URL is required"],
    },
    rating: {
      rate: {
        type: Number,
        required: [true, "Rating is rquired"],
        mi: [0, "rate cannot be below 0"],
        max: [5, "rate cannot be above 5"],
      },
      count: {
        type: Number,
        required: [true, "rating count is required"],
        min: [0, "Count cannot be negative"],
      },
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
