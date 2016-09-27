const router = require('express').Router();
const SalesPerson = require('../db').models.SalesPerson;
const Assignment = require('../db').models.Assignment
const Promise = require('bluebird');

module.exports = router;

router.get('/', function(req, res, next){
	SalesPerson.findAll({include: [Assignment] })
		.then(function(salesPeople){
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

router.post('/:id/region/:regionId', function(req, res, next){
	Assignment.create({ 
		salesPersonId: req.params.id,
		regionId: req.params.regionId
	})
	.then(function(assignment){
		res.send(assignment);
	})
	.catch(next);
})