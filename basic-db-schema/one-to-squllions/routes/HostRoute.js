const express = require('express');

const HostControllers = require('../Controllers/HostControllers');

const router = express.Router();

router.get('/', HostControllers.getHost);
router.get('/:id', HostControllers.getHostlById);
router.post('/', HostControllers.createHost);
router.patch('/:id', HostControllers.updateHostById);
router.delete('/:id', HostControllers.deleteHostById);

module.exports = router;