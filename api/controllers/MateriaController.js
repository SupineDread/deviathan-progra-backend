/**
 * MateriaController
 *
 * @description :: Server-side logic for managing Materias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const _ = require('lodash');
const async = require('async');

module.exports = {

	getClasesProfesor: (req, res) => {
		let id = req.param('id');
		User.findOne(id).populateAll().then(function(profe) {
		  let clases = _.groupBy(profe.clases, clase => clase.materia);
			let finalClases = [];
			for (var clase in clases) {
				finalClases = finalClases.concat(_.uniqBy(clases[clase], 'grupo'));
			}
			async.eachOfSeries(finalClases, (clase, i, next) => {
				Materia.findOne(clase.materia).then(function(materiaTemp) {
					finalClases[i].materia = materiaTemp;
					Grupo.findOne(clase.grupo).then(function(grupoTemp) {
						finalClases[i].grupo = grupoTemp;
						next();
					}).catch(function(err) {
					  return res.json(500, {err: err});
					});
				}).catch(function(err) {
				  return res.json(500, {err: err});
				});
			}, () => {
				console.log('Iterado por todos las clases');
				return res.json(finalClases);
			});
		}).catch(function(err) {
			console.log(err);
		  return res.json(500, {err: err});
		});
	}

};
