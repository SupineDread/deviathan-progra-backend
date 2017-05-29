/**
 * DashboardController
 *
 * @description :: Server-side logic for managing Dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const q = require('q');

module.exports = {

	upload: (req, res) => {

	},

	getAdminInfo: function (req, res) {
		let qInfo = [
			User.count({roles: ['ROLE_ALUMNO']}),
			Grupo.count(),
			Materia.count(),
			User.count({roles: ['ROLE_PROFESOR']}),
			Salon.count(),
			Inventario.count(),
			Reporte.count()
		];
		q.all(qInfo).then(function(data) {
		  return res.json({
				users: data[0] || 0,
				grupos: data[1] || 0,
				materias: data[2] || 0,
				teachers: data[3] || 0,
				salones: data[4] || 0,
				inventarios: data[5] || 0,
				reportes: data[6] || 0
			});
		}).catch(function(err) {
		  return res.json(500, {err: err});
		});
	}

};
