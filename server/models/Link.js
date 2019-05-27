const mongoose = require("mongoose");
const listOfTypes = [
  "JavaScript",
  "Mongo",
  "Express",
  "Node",
  "React",
  "HTML",
  "Framework",
  "Frontend",
  "Backend",
  "Tutorial",
  "Git",
  "Job",
  "Design",
  "Tools",
  "API",
  "Humour",
  "Other"
];

const linkSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "The url is required"],
    minlength: 1
  },
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    required: [true, "description is required"],
    minlength: 1
  },
  type: {
    type: [String],
    enum: listOfTypes,
    minlength: 1
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const Link = mongoose.model("Link", linkSchema);

module.exports = Link;
