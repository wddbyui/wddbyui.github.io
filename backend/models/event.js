const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema ({
  eventName: { type: String, required: true},
  eventType: { type: String, required: false},

  startDate: {type: Date, required: true},
  startTime_hour: {type: Number, required: true},
  startTime_min: {type: Number, required: true},
  startTime_AmPm: {type: String, required: true},

  endDate: {type: Date, required: false},
  endTime_hour: {type: Number, required: false},
  endTime_min: {type: Number, required: false},
  endTime_AmPm: {type: String, required: false},

  eventLocation: {type: String, required: true},

  eventRepeat: {type: Boolean, requried: false},

  eventZoom: {type: String, required: false},

  description: { type: String, required}

})