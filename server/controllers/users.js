const models = require('../models');

module.exports = {
  getAll: (req, res) => {
    models.users.getAll((err, result) => {
      if( err ) res.status(404).send('Not found!');
      else res.status(200).json(result);
    });
  },
  getCurrent: (req, res) => {
    const { userId } = req.params;

    models.users.getCurrent(userId, (err, result) => {
      if( err || ! result ) res.status(404).send('Not found!');
      else res.status(200).json(result);
    });
  },
  getCurrentOrders: (req, res) => {
    const { userId } = req.params;

    models.users.getCurrentOrders(userId, (err, result) => {
      if( err || ! result ) res.status(404).send('Not found!');
      else res.status(200).json(result);
    });
  }
};
