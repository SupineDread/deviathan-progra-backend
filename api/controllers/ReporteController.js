/**
 * ReporteController
 *
 * @description :: Server-side logic for managing Reportes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const async = require('async');
const _ = require('underscore');

module.exports = {

	getAllReportes: function (req, res) {
		Reporte.find().populateAll().then(function(data) {
		  async.eachOfSeries(data, (item, key, next) => {
				Salon.findOne(item.item.salon).then(function(salon_res) {
				  data[key].item.salon = salon_res;
					next();
				}).catch(function(err) {
					next(err);
				});
			}, () => {
				return res.json(data);
			});
		})
	},

	getUserReports: (req, res) => {
		let id = req.param('id');
		Reporte.find({user: id}).populateAll().then(function(data) {
		  return res.json(data);
		}).catch(function(err) {
		  return res.json(500, {err: err});
		});
	}

};
