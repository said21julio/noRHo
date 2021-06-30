
const { Router } = require('express');
const { newsController } = require('../controllers');
const router = Router();

router.get('/:parameters', newsController.get);

module.exports = router;
