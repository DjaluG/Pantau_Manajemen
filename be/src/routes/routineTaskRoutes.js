const express = require('express');
const routineTaskController = require('../../controllers/routineTaskController');

const router = express.Router();

// Create
router.post('/create-task', routineTaskController.postRoutineTask);

// Read
router.get('/get-task', routineTaskController.getAllRoutineTask);

// Update
router.put('/update-task/:id', routineTaskController.updateRoutineTask);

// Delete
router.delete('/delete-task/:id', routineTaskController.deleteRoutineTask);

module.exports = router;
