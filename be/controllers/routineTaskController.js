const { Routine } = require('../models');

const getAllRoutineTask = async (req, res) => {
    try {
      const routines = await Routine.findAll();
      res.json(routines);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const postRoutineTask = async (req, res) => {
    const posisiID = req.user.posisiID;
    const worksID = req.user.worksID;
    const { image, description, category, status, time } = req.body;
  
    try {
      const newTask = await Routine.create({ posisiID, worksID, image, description, category, status, time });
      res.status(201).json(newTask);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const updateRoutineTask = async (req, res) => {
    const { id } = req.params;
    const {image, description, category, status, time } = req.body;
  
    try {
      const task = await Routine.findByPk(id);
      if (!task) {
        return res.status(404).json({ error: 'Routine Task not found' });
      }
  
      await task.update({image, description, category, status, time });
      res.json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const deleteRoutineTask = async (req, res) => {
    const { id } = req.params;
  
    try {
      const task = await Routine.findByPk(id);
      if (!task) {
        return res.status(404).json({ error: 'Routine Task not found' });
      }
      
      await task.destroy();
      res.json({ message: 'Routine Task deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  module.exports = {
    getAllRoutineTask,
    postRoutineTask,
    updateRoutineTask,
    deleteRoutineTask,
  };