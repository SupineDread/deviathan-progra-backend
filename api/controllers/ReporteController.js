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
				console.log('Iterando por todos los reportes');
				return res.json(data);
			});
		})
	}

};
