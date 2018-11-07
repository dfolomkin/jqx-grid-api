const data = require('../data-mocks/projects.json').slice(0, 300);

const getProjects = () => (req, res) => {
  if (data && data.length) {
    res.json(data);
  } else {
    res.send(new Error('No data.'));
  }
};

const getEmployeeProjects = () => (req, res) => {
  const id = +req.params.id;
  const records = data.filter(item => item['employee-id'] === id);

  if (records.length) {
    res.json(records);
  } else {
    res.send(new Error(`Employee #${id} does'n have projects.`));
  }
};

const getProject = () => (req, res) => {
  const id = +req.params.id;
  const record = data.find(item => item.id === id);

  if (record) {
    res.json(record);
  } else {
    res.send(new Error(`Project #${id} does'n exists in base.`));
  }
};

module.exports = {
  getProjects,
  getEmployeeProjects,
  getProject
};
