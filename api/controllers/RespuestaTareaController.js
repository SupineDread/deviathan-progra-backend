/**
 * RespuestaTareaController
 *
 * @description :: Server-side logic for managing Respuestatareas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getMyRespuestas: (req, res) => {
		let id = req.param('id');
		RespuestaTarea.find({alumno: id}).then(function(data) {
		  return res.json(data);
		}).catch(function(err) {
		  return res.json(500, {err: err});
		});
	}

};
