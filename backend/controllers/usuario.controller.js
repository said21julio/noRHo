
const { usuarioModel } = require('../models');

const postlogin = async (req,res) => {
  const user = await usuarioModel.getUsuario(req.body);
  if(user.length > 0) {
    return res.status(201).json([]);
  }
  return res.status(400).json([]);
};

const post = async (req,res) => {
  try {
    await usuarioModel.setUsuario(req.body);
    return res.status(201).json([]);
  } catch (error) {
    return res.status(400).json([]);
  }
};

module.exports = {
  postlogin,
  post,
};
