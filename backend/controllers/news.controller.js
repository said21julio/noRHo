
const { newsModel } = require('../models');


const get = async (req,res) => {
  const parameters = JSON.parse(req.params.parameters);
  const data = await newsModel.getNews(parameters);
  return res.json(data);
};

module.exports = {
  get,
};
