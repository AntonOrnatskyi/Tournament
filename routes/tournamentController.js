var Tournament = require('../models/tournament');

// Display list of all Tournaments
exports.tournament_list = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Tournament list');
};

// Display detail page for a specific Tournament
exports.tournament_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: tournament detail: ' + req.params.id);
};

// Display Tournament create form on GET
exports.tournament_create_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Tournament create GET');
};

// Handle Tournament create on POST
exports.tournament_create_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Tournament create POST');
};

// Display Tournament delete form on GET
exports.tournament_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Tournament delete GET');
};

// Handle Tournament delete on POST
exports.tournament_delete_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Tournament delete POST');
};

// Display Tournament update form on GET
exports.tournament_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Tournament update GET');
};

// Handle Tournament update on POST
exports.tournament_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Tournament update POST');
};
