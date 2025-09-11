const mongoose = require("mongoose");
const { Schema } = mongoose;

const BlogPostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: Schema.Types.Mixed,
      default: null,
      validate: {
        validator: (v) =>
          v === null || (typeof v === "object" && !Array.isArray(v)),
        message: "Notes must be a plain JSON object or null",
      },
    },
    postedDate: {
      type: Date,
      default: Date.now,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlogPost", BlogPostSchema);
