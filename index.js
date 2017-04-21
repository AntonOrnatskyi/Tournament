const cluster = require('express-cluster');
cluster( (worker) => {
  let app = require('./app');
  app.set('port', 3000);
  let server = app.listen(
    app.get('port'),
    () => console.log('Express server listening on port ' + server.address().port)
  );
  return server;
}, {count: 5});
