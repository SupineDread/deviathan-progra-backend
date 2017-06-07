/**
 * ClaseOnlineController
 *
 * @description :: Server-side logic for managing Claseonlines
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getAllClasesOnlineProfesor: (req, res) => {
		let id = req.param('id');
		ClaseOnline.find({streamer: id}).populateAll().then(function(data) {
		  return res.json(data);
		}).catch(function(err) {
		  console.log(err);
		  return res.json(500, {msg: err});
		});
	}

};
