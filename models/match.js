var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MatchSchema = Schema({
  tournament: {type: Schema.ObjectId, ref: 'Tournament', required: true},
  player1: {type: Schema.ObjectId, ref: 'Player', required: true},
  player2: {type: Schema.ObjectId, ref: 'Player', required: true},
  rules: {type: Schema.ObjectId, ref: 'Rules', required: true}
});

// Virtual for match's URL
MatchSchema
.virtual('url')
.get(function () {
  return '/tournaments/matches/' + this._id;
});

//Export model
module.exports = mongoose.model('Match', MatchSchema);
