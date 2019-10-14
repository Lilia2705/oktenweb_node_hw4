module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define('House', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        city: {
            type: DataTypes.STRING
        },
        metres: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
    }, {
        tableName: 'houses',
        timestamps: false
    });
    return House;
}
