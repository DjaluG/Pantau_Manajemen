// worksRoutes.js
const express = require('express');
const worksController = require('../../controllers/worksController');

const router = express.Router();

// Create
router.post('/create-work', worksController.createWork);

// Read
router.get('/get-works', worksController.getAllWorks);

// Update
router.put('/update-work/:id', worksController.updateWork);

// Delete
router.delete('/delete-work/:id', worksController.deleteWork);

module.exports = router;
