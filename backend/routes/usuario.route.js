
const { Router } = require('express');
const { usuarioController } = require('../controllers');
const router = Router();

router.post('/login', usuarioController.postlogin);
router.post('/', usuarioController.post);

module.exports = router;
