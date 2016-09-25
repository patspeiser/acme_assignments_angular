const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, {
});

var SalesPerson = db.define('sales_person', {
	name: Sequelize.STRING
});

var Region = db.define('region', {
	zipCode: Sequelize.STRING
});

var Assignment = db.define('assignment', {});

SalesPerson.hasMany(Assignment);
Region.hasMany(Assignment);
Assignment.belongsTo(SalesPerson);
Assignment.belongsTo(Region);

module.exports = {
	db: db,
	models: {
		SalesPerson: SalesPerson,
		Region: Region,
		Assignment: Assignment
	}
}