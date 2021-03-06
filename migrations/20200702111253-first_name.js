'use strict';

const { STRING } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // await queryInterface.renameColumn('students', "fname", "first_name");
    await queryInterface.renameColumn('students', "first_name", "first_name");
    // await queryInterface.addColumn("students", "last_name", { type: Sequelize.STRING, allowedNull: false });

    // await queryInterface.sequelize.query(`UPDATE students SET last_name = "Tawil";`);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.renameColumn('students', "first_name", "fname");
    await queryInterface.removeColumn("students", "last_name");
  }
};
