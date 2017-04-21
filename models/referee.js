var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RefereeSchema = Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100}
  }
);

// Virtual for author's full name
RefereeSchema
.virtual('full_name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for player's URL
RefereeSchema
.virtual('url')
.get(function () {
  return '/referees/' + this._id;
});

//Export model
module.exports = mongoose.model('Referee', RefereeSchema);
