'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('roles', [
      {
        name: 'usuario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
