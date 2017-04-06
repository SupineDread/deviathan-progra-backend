/**
 * GrupoController
 *
 * @description :: Server-side logic for managing Grupoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const _ = require('underscore');

module.exports = {

	getHorario: function (req, res) {
		let id = req.param('id');
		ClaseHorario.find({grupo: id}).populateAll().then(function(data) {
			if(!data) return res.json({1: [], 2: [], 3: [], 4: [], 5: [], 6: []});
			let horario = _.groupBy(data, 'dia');
			return res.json(horario);
		}).catch(function(err) {
		  return res.json(500, {err: err});
		});
	}

};
