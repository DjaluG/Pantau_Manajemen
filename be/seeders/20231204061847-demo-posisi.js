'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Posisis', [
      {
        name: 'Waka Kurikulum',
        divisiID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kaprog Apk',
        divisiID: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kaprog RPL',
        divisiID: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kaprog TKJ',
        divisiID: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kaprog MMD',
        divisiID: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Koordinator Mapel',
        divisiID: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Guru Mapel',
        divisiID: 1,   
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Waka Kesiswaan',
        divisiID: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pembina Akhlak Mulia',
        divisiID: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pembina Pramuka',
        divisiID: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pembina Latih Pramuka',
        divisiID: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pembina Osis',
        divisiID: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Koordinator BK',
        divisiID: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Koordinator Eksul & Senbud',
        divisiID: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Koordinator Beasiswa',
        divisiID: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Koordiantor Infaq',
        divisiID: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pembimbing Siswa',
        divisiID: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Manajer Sarparas',
        divisiID: 3, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pelaksana Sarparas',
        divisiID: 3, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kepala Lab & Server',
        divisiID: 3, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Teknisi Perawatan $ Perbaikan Peralatan',
        divisiID: 3, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Manajer TU & Humas',
        divisiID: 4, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pelaksana Keuangan & Kerumahtanggaan',
        divisiID: 4, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pelaksana Kepegawaian',
        divisiID: 4, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pelaksana Kurikulum',
        divisiID: 4, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pelaksana Kesiswaan',
        divisiID: 4, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pembantu Umum',
        divisiID: 4, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Manajer BKK & Hubinak',
        divisiID: 5, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Manajer Pedatin',
        divisiID: 6, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pelaksana Perpustakaan',
        divisiID: 6, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pelaksana Pedatin',
        divisiID: 6, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wa Manajemen Mutu',
        divisiID: 7, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Manajer Kesling',
        divisiID: 8, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pembina Pendidikan Lanjut',
        divisiID: 8, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'UKS',
        divisiID: 8, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pelaksana Lingkungan',
        divisiID: 8, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posisis', null, {});
  }
};