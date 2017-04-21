var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TournamentSchema = Schema({
  level: {type: String, enum: ['Red', 'Orange', 'Green', 'Yellow', 'Amateur',]}
  date_of_start: {type: Date, required: true},
  date_of_end: {type: Date, required: false},
  rules: {type: Schema.ObjectId, ref: 'Rules', required: true}
});

// Virtual for match's URL
TournamentSchema
.virtual('url')
.get(function () {
  return '/tournaments/' + this._id;
});

//Export model
module.exports = mongoose.model('Tournament', TournamentSchema);
