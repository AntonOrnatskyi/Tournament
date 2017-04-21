var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TrainerSchema = Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    start_tennis: {type: Boolean, required: false}
  }
);

// Virtual for author's full name
TrainerSchema
.virtual('full_name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for player's URL
TrainerSchema
.virtual('url')
.get(function () {
  return '/trainers/' + this._id;
});

//Export model
module.exports = mongoose.model('Trainer', TrainerSchema);
