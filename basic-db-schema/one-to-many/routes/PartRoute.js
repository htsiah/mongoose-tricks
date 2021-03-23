const express = require('express');

const PartControllers = require('../Controllers/PartControllers');

const router = express.Router();

router.get('/', PartControllers.getPart);
router.get('/:id', PartControllers.getPartlById);
router.post('/', PartControllers.createPart);
router.patch('/:id', PartControllers.updatePartById);
router.delete('/:id', PartControllers.deletePartById);

module.exports = router;