/**
 * NotaController
 *
 * @description :: Server-side logic for managing Notas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getUserNotes: (req, res) => {
		let id = req.param('id');
		Nota.find({user: id}).populateAll().then(function(data) {
			return res.json(data);
		}).catch(function(err) {
			console.log(err);
			return res.json(500, {msg: err});
		});
	}
	
};
