// worksController.js
const { Works } = require('../models');

const getAllWorks = async (req, res) => {
  try {
    const works = await Works.findAll();
    res.json(works);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createWork = async (req, res) => {
    const { plan, category, indicator, status, time } = req.body;
  
    // Misalnya, jika `posisiID` dapat diambil dari objek pengguna yang masuk
    // Sesuaikan ini dengan cara Anda mendapatkan `posisiID` dari pengguna
    // const posisiID = req.user.posisiID;
  
    try {
      const newWork = await Works.create({ plan, category, indicator, status, time });
      res.status(201).json(newWork);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

const updateWork = async (req, res) => {
  const { id } = req.params;
  const { plan, category, indicator, status, time } = req.body;

  try {
    const work = await Works.findByPk(id);
    if (!work) {
      return res.status(404).json({ error: 'Work not found' });
    }

    await work.update({ plan, category, indicator, status, time });
    res.json(work);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteWork = async (req, res) => {
  const { id } = req.params;

  try {
    const work = await Works.findByPk(id);
    if (!work) {
      return res.status(404).json({ error: 'Work not found' });
    }

    await work.destroy();
    res.json({ message: 'Work deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllWorks,
  createWork,
  updateWork,
  deleteWork,
};
