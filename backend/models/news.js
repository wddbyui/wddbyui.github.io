const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  newsTitle: { type: String, required: true},
  newsBody: { type: String, required: true},
  newsDate_added: { type: Date, required: true},
  newsDate_updated: { type: Date, required: false},
}) 