/**
 * InventarioController
 *
 * @description :: Server-side logic for managing Inventarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getReservasForItem: (req ,res) => {
		let id = req.param('id');
		Reserva.find({item: id}).populateAll().then(function(data) {
		  return res.json(data);
		}).catch(function(err) {
		  console.log(err);
		  return res.json(500, {msg: err});
		});
	}

};
