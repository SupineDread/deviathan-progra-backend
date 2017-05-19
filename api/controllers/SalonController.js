/**
 * SalonController
 *
 * @description :: Server-side logic for managing Salons
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const moment = require('moment');
const _ = require('underscore');

module.exports = {

	getClasesHoy: (req, res) => {
		let id = req.param('id');
		let dia = moment().weekday();
	},

	getAvailableHours: (req, res) => {
		let id = req.param('id');
		let dia = moment().weekday();
		ClaseHorario.find({salon: id, dia: dia}).populateAll().then(function(data) {
			let horas = data.map(clase => [clase.inicio.replace(':00', ''), clase.fin.replace(':00', ''), clase.materia ? clase.materia.name : 'Clase no asignada.' ]);
		  return res.json(horas);
		}).catch(function(err) {
		  return res.json(500, {err: err});
		});
	},

	getAllItems: (req, res) => {
		let id = req.param('id');
		Inventario.find({salon: id}).populateAll().then(function(data) {
		  return res.json(data);
		}).catch(function(err) {
		  return res.json(500, {err: err});
		});
	}

};
