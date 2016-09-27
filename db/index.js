const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, { logging: false });

var SalesPerson = db.define('sales_person', {
	name: Sequelize.STRING
},{
	instanceMethods: {
		hasAssignment: function(id){
			console.log('waaaay in the model');
			var hasAssignment = false; 
			if (this.Assignments){
				this.Assignments.forEach( function(assignment){
					if (assignment.id = id){
						hasAssignment = true;
					};
				});
			}
		}
	}
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