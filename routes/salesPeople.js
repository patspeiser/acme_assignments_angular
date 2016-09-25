const router = require('express').Router();
const SalesPerson = require('../db').models.SalesPerson;

module.exports = router;

router.get('/', function(req, res, next){
	SalesPerson.findAll()
		.then(function(salesPeople){
			console.log('in salesPeople.js GET /');
			res.send(salesPeople);
		})
		.catch(next);
});

router.post('/', function(req, res, next){
	SalesPerson.create({ name: req.body.name })
		.then(function(salesPerson){
			res.send(salesPerson);
		})
		.catch(next);
})

router.delete('/:id', function(req, res, next){
	SalesPerson.destroy({ where: { id: req.params.id } })
		.then(function(success){
			res.sendStatus(200);
		})
		.catch(next);
})