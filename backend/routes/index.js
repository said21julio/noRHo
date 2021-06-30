const { Router } = require('express');
const usuarioRoute = require('./usuario.route');
const newsRoute = require('./news.route');
const bodyParser = require('body-parser');
const router= Router();
const raiz = '/api';
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use(raiz + '/user', usuarioRoute);
router.use(raiz + '/news', newsRoute);
module.exports = router;
