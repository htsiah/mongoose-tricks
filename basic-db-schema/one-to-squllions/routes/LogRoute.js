const express = require('express');

const LogControllers = require('../Controllers/LogControllers');

const router = express.Router();

router.get('/', LogControllers.getLog);
router.get('/:id', LogControllers.getLoglById);
router.post('/', LogControllers.createLog);
router.patch('/:id', LogControllers.updateLogById);
router.delete('/:id', LogControllers.deleteLogById);

module.exports = router;