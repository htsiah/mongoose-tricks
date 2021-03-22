const express = require('express');

const PersonControllers = require('../Controllers/PersonControllers');

const router = express.Router();

router.get('/', PersonControllers.getPerson);
router.get('/:id', PersonControllers.getPersonlById);
router.post('/', PersonControllers.createPerson);
router.patch('/:id', PersonControllers.updatePersonById);
router.delete('/:id', PersonControllers.deletePersonById);

module.exports = router;