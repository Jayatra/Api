const mongoose = require("mongoose");
require("mongoose-type-url");
const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  img: {
    type: mongoose.SchemaTypes.Url,
    require: true,
  },
  summary: {
    type: String,
    require: true,
    max: 250,
    min: 20,
  },
});

module.exports = mongoose.model("Posts", dataSchema);
