var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RulesSchema = Schema({
  sets: {type: Number, required: true},
  games: {type: Number, required: true},
  tiebreak_points: {type: Number, required: true},
  final_set_rule: {type: Number, required: true},
  game_rule: {type: Boolean, required: true},
  tiebreak_rule: {type: Boolean, required: true},
  sudden_death: {type: Boolean, required: true},
  summary: {type: String, required: true}
});

//Export model
module.exports = mongoose.model('Rules', RulesSchema);
