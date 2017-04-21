var Match = require('../models/match');

// Display list of all Matchs
exports.match_list = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Match list');
};

// Display detail page for a specific Match
exports.match_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Match detail: ' + req.params.id);
};

// Display Match create form on GET
exports.match_create_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Match create GET');
};

// Handle Match create on POST
exports.match_create_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Match create POST');
};

// Display Match delete form on GET
exports.match_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Match delete GET');
};

// Handle Match delete on POST
exports.match_delete_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Match delete POST');
};

// Display Match update form on GET
exports.match_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Match update GET');
};

// Handle match update on POST
exports.match_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Match update POST');
};
