const db = require('../models');

module.exports = function (app) {

  app.get('/api/user', function (req, res) {
    db.Employee.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/api/user', function (req, res) {
    db.Employee.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // Add a PUT Route that will update a User based on Id

  // Add a DELETE Route that will delete a User based on Id

  app.get('/api/kudos', function (req, res) {
    db.Kudos.find({})
      .populate('Employee')
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/api/kudos', function (req, res) {
    db.Kudos.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // Add a PUT Route that will update a BlogPost based on Id

  // Add a DELETE Route that will delete a BlogPost based on Id

}