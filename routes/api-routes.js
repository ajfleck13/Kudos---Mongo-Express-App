const db = require('../models');

module.exports = function (app) {

  app.get('/api/employee', function (req, res) {
    db.Employee.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/api/employee', function (req, res) {
    db.Employee.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.get('/api/kudos', function (req, res) {
    db.Kudos.find({})
      .populate('employeeTo')
      .populate('employeeFrom')
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
}