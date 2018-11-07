const data = require('../data-mocks/employees.json');

const getEmployees = () => (req, res) => {
  if (data && data.length) {
    res.json(data);
  } else {
    res.send(new Error('No data.'));
  }
};

const getEmployee = () => (req, res) => {
  const id = +req.params.id;
  const record = data.find(item => item.id === id);

  if (record) {
    res.json(record);
  } else {
    res.send(new Error(`Employee #${id} does'n exists in base.`));
  }
};

module.exports = {
  getEmployees,
  getEmployee
};
