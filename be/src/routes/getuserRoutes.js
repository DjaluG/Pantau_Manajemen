// routes/index.js
const express = require('express');
const router = express.Router();
const { User } = require('../../models')
const userController = require('../../controllers/getuserController');

router.get('/users', userController.getAllUsers);
router.get('/users/filter', userController.getUsersByFilter)

// router.get('/users/:name', async (request, response) => {
//     try {
//         const { name } = request.params;
//         const foundUsers = await User.findAll({
//             where: {
//                 name: {
//                     [Sequelize.Op.iLike]: `%${name}%` // Pencarian berdasarkan bagian dari nama
//                 }
//             }
//         });
//         response.send(foundUsers);
//     } catch (error) {
//         console.error(error.message); // Tambahkan ini untuk melihat detail error di konsol
//         response.status(500).send({ message: 'Terjadi kesalahan saat mencari user berdasarkan nama' });
//     }
// });



module.exports = router;
