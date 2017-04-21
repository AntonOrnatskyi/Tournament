var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PlayerSchema = Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    trainer: {type: Schema.ObjectId, ref: 'Trainer', required: false},
    start_tennis: {type: Boolean, required: false}
  }
);

// Virtual for author's full name
PlayerSchema
.virtual('full_name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for player's URL
PlayerSchema
.virtual('url')
.get(function () {
  return '/players/' + this._id;
});

//Export model
module.exports = mongoose.model('Player', PlayerSchema);
