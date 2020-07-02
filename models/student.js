module.exports = (sequelize, DataTypes) =>
{
    const student = sequelize.define("student", 
    {
        fname: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return student;
}