/**
 * TareaController
 *
 * @description :: Server-side logic for managing Tareas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getAllTareasProfesor: (req, res) => {
		let id = req.param('id');
		Tarea.find({profesor: id}).populateAll().then(function(data) {
		  return res.json(data);
		}).catch(function(err) {
		  return res.json(500, {err: err});
		});
	}

};
